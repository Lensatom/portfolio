export const GetYears = (initialYear:number) => {
  const date = new Date();
  const presentYear = date.getFullYear();
  const year = presentYear - initialYear;
  return year;
}