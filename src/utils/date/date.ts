/**
 * DataオブジェクトをYYYY/MM/DD HH:mmの形式に変換
 * @param date
 */
export const dateToString = (date: Date): string => {
  const yyyy = date.getFullYear();
  const MM = date.getMonth() + 1; // getMonth()の返り値は0が基点
  const dd = date.getDate();
  const HH = date.getHours();
  const mm = `0${date.getMinutes()}`.slice(-2);
  return `${yyyy}/${MM}/${dd} ${HH}:${mm}`;
};
