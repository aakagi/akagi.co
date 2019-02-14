
const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://5ltiyzowya.execute-api.us-east-1.amazonaws.com/production'
  : 'http://localhost:4000';

export const api = {
  CONTACT_FORM: `${API_BASE}/forms/contact-akagi`,
};

export const jsonHeaders = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
