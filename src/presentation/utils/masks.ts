export const time = (value?: string) => {
  if (!value) return "";

  const cleaned = value.replace(/\D/g, "");
  const limited = cleaned.slice(-6).padStart(6, "0");

  let hours = Number(limited.slice(0, 2));
  let minutes = Number(limited.slice(2, 4));
  let seconds = Number(limited.slice(4, 6));

  if (seconds > 59) seconds = 59;
  if (minutes > 59) minutes = 59;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
};
