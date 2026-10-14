import { formatDuration, formatZonedDateTime } from "@/lib/datetime";

export function DateTime({ value }: { value: string }) {
  const { text, dateTime } = formatZonedDateTime(value);
  return <time dateTime={dateTime}>{text}</time>;
}

export function Duration({ value }: { value: string }) {
  const { text, dateTime } = formatDuration(value);
  return <time dateTime={dateTime}>{text}</time>;
}
