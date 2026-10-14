// Ponyfill: uses the native Temporal where available (Chrome, Firefox) and its
// own implementation elsewhere (Safari, workerd) without touching globals.
// Don't return Temporal objects from loaders/server functions; pass ISO strings.
import { Temporal } from "temporal-polyfill";

// Formatted by hand (not Intl) so SSR and every browser render identical text.
const pad2 = (n: number) => String(n).padStart(2, "0");

/** "2024-10-27T20:08:00+09:00[Asia/Tokyo]" -> "2024/10/27 20:08" */
export function formatZonedDateTime(value: string) {
  const zdt = Temporal.ZonedDateTime.from(value);
  return {
    text: `${zdt.year}/${pad2(zdt.month)}/${pad2(zdt.day)} ${pad2(zdt.hour)}:${pad2(zdt.minute)}`,
    // <time dateTime> doesn't allow the "[Asia/Tokyo]" annotation
    dateTime: zdt.toString({ timeZoneName: "never" }),
  };
}

/** "PT4H37M33S" -> "4:37:33" */
export function formatDuration(value: string) {
  const d = Temporal.Duration.from(value).round({ largestUnit: "hours" });
  return {
    text: `${d.hours}:${pad2(d.minutes)}:${pad2(d.seconds)}`,
    dateTime: d.toString(),
  };
}
