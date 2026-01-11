"use client";

import { useCallback, useEffect, useState } from "react";

const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

type TokenClient = {
  requestAccessToken: (overrides?: { prompt?: string }) => void;
};

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: TokenResponse) => void;
          }) => TokenClient;
          revoke: (token: string, callback: () => void) => void;
        };
      };
    };
  }
}

type TokenResponse = {
  access_token?: string;
  error?: string;
};

type UseGoogleCalendarReturn = {
  isSignedIn: boolean;
  isLoading: boolean;
  accessToken: string | null;
  signIn: () => void;
  signOut: () => void;
};

export function useGoogleCalendar(): UseGoogleCalendarReturn {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenClient, setTokenClient] = useState<TokenClient | null>(null);

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.warn("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set");
      return;
    }

    const initClient = () => {
      if (!window.google?.accounts?.oauth2) {
        return;
      }

      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: SCOPES,
        callback: (response: TokenResponse) => {
          setIsLoading(false);
          if (response.error) {
            console.error("OAuth error:", response.error);
            return;
          }
          if (response.access_token) {
            setAccessToken(response.access_token);
          }
        },
      });

      setTokenClient(client);
    };

    // Wait for Google Identity Services to load
    if (window.google?.accounts?.oauth2) {
      initClient();
    } else {
      const checkInterval = setInterval(() => {
        if (window.google?.accounts?.oauth2) {
          clearInterval(checkInterval);
          initClient();
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }
  }, []);

  const signIn = useCallback(() => {
    if (!tokenClient) {
      console.error("Token client not initialized");
      return;
    }
    setIsLoading(true);
    tokenClient.requestAccessToken({ prompt: "" });
  }, [tokenClient]);

  const signOut = useCallback(() => {
    if (accessToken && window.google?.accounts?.oauth2) {
      window.google.accounts.oauth2.revoke(accessToken, () => {
        setAccessToken(null);
      });
    } else {
      setAccessToken(null);
    }
  }, [accessToken]);

  return {
    isSignedIn: accessToken !== null,
    isLoading,
    accessToken,
    signIn,
    signOut,
  };
}
