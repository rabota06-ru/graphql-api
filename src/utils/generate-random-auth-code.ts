export function generateRandomAuthCode() {
  return Math.floor(Math.random() * 9000 + 1000).toString();
}
