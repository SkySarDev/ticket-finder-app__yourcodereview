const addZero = (num: number) => (num < 10 ? `0${num}` : num);

export const routeStops = (stops: number) => {
  if (stops === 0) {
    return "без пересадок";
  } else if (stops === 1) {
    return `${stops} пересадка`;
  } else if (stops >= 2 && stops <= 4) {
    return `${stops} пересадки`;
  }

  return `${stops} пересадок`;
};

export const getTime = (timestamp: string) => {
  const hours = addZero(new Date(timestamp).getUTCHours());
  const minutes = addZero(new Date(timestamp).getMinutes());

  return `${hours}:${minutes}`;
};

export const getDuration = (timestamp: number) => {
  const duration = timestamp / 1000 / 60;
  const hours = addZero(Math.floor(duration / 60));
  const minutes = addZero(Math.floor(duration % 60));

  return `${hours}ч ${minutes}м`;
};
