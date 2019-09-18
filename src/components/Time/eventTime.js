// Helper functions to translate event time to readable time

const dateToFormattedHours = (date) => {
  const hours = date.getHours();
  return hours.toString().length <= 1 ? `0${hours}` : hours;
};

const dateToFormattedMinutes = (date) => {
  const minutes = date.getMinutes();
  return minutes.toString().length <= 1 ? `0${minutes}` : minutes;
};

const dateToFormattedTime = (isoString) => {
  const date = new Date(isoString);
  let timeString = '';
  timeString += `${dateToFormattedHours(date)}:`;
  timeString += `${dateToFormattedMinutes(date)}`;
  return timeString;
};

const dateToMonth = (date) => {
  const months = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
  return months[date.getMonth()];
};

const dateToFormattedDate = (isoString) => {
  const date = new Date(isoString);
  const formattedDate = `${date.getDate()}. ${dateToMonth(date)}`;
  return formattedDate;
};

export { dateToFormattedTime, dateToFormattedDate };