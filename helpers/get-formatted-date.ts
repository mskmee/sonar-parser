const getFormattedDate = (date: string): string => {
  const dateObj = new Date(date);
  return `${(dateObj.getMonth() + 1).toString().padStart(2, "0")}-${dateObj
    .getDate()
    .toString()
    .padStart(2, "0")}-${dateObj.getFullYear()}`;
};

export { getFormattedDate };
