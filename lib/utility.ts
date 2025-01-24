export function capitalizeWords(str: string): string {
  if (!str) return str;

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatDuration(seconds: number): string {
  // if (seconds < 60) return `${seconds}s`;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// @ts-ignore
export function clamp(value, lowerBound, upperBound) {
  "worklet";
  return Math.max(lowerBound, Math.min(value, upperBound));
}
// @ts-ignore

export function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

// @ts-ignore
export function objectMove(object, from, to) {
  "worklet";
  const newObject = Object.assign({}, object);

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to;
    }

    if (object[id] === to) {
      newObject[id] = from;
    }
  }

  return newObject;
}
// @ts-ignore

export function listToObject(list) {
  const values = Object.values(list);
  const object = {};

  for (let i = 0; i < values.length; i++) {
    // @ts-ignore

    object[values[i].id] = i;
  }

  return object;
}
