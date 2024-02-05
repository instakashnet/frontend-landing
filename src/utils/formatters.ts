export function formatNumberToString(num: number, string: string = "") {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "mill";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "mil";
  } else {
    return num.toString();
  }
}
