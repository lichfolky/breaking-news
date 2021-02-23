//min max inclusive
export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function chunkString(str: string, length: number) : string[] {
  return str.match(new RegExp('.{1,' + length + '}', 'g'))  || [];;
}
