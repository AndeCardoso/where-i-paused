export const formatSecondsToTime = (seconds?: number) => {
  if (!seconds) {
    return "00:00";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (!hours) {
    return [minutes, remainingSeconds]
      .map((unit) => String(Math.floor(unit)).padStart(2, "0"))
      .join(":");
  }

  return [hours, minutes, remainingSeconds]
    .map((unit) => String(Math.floor(unit)).padStart(2, "0"))
    .join(":");
};

export const formatTimeToSeconds = (timeStr: string) => {
  if (!timeStr) {
    return 0;
  }

  const parts = timeStr.split(":").map(Number);

  if (parts.length === 1) {
    return parts[0];
  }

  if (parts.length === 2) {
    let [minutes, seconds] = parts;

    if (seconds < 10 && timeStr[timeStr.length - 1] !== ":") {
      seconds *= 10;
    }

    return minutes * 60 + seconds;
  }

  if (parts.length === 3) {
    let [hours, minutes, seconds] = parts;

    if (seconds < 10 && timeStr[timeStr.length - 1] !== ":") {
      seconds *= 10;
    }

    return hours * 3600 + minutes * 60 + seconds;
  }

  return 0;
};
