import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Extend dayjs with useful plugins
dayjs.extend(utc);
dayjs.extend(timezone);

export default async function Page() {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=667rpkl8nc5ngfov6v5jm90uqh4iqcqf%40import.calendar.google.com&ctz=America%2FNew_York"
      style={{ border: 0, width: "100%", height: "100%", minHeight: "100vh" }}
    />
  );
}
