const dateFormat = (inputDate: string, format: string) => {
  const calendarDate = new Date(inputDate);

  const day = calendarDate.getDate();
  const month = calendarDate.getMonth() + 1;
  const year = calendarDate.getFullYear();

  format = format.replace("MM", month.toString().padStart(2,"0"));

  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substring(2,2));
  }

  format = format.replace("dd", day.toString().padStart(2,"0"));

  return format;
}

export default dateFormat
