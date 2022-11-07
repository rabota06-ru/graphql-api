export const addDays = (date: Date, days: number) =>
  new Date(date.setDate(date.getDate() + days));
export const addMinutes = (date: Date, minutes: number) =>
  new Date(date.setMinutes(date.getMinutes() + minutes));
