function dateandtime(){
  const dateTimeString = "2024-04-13T21:43";

// Creating a new Date object with the given string
const dateTime = new Date(dateTimeString);

// Extracting date components
const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1; // Months are zero-indexed, so adding 1
const day = dateTime.getDate();

// Extracting time components
let hours = dateTime.getHours();
const minutes = dateTime.getMinutes();
const seconds = dateTime.getSeconds();

// Determine AM or PM
const amOrPm = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hours = hours % 12 || 12; // Ensure 12-hour format, if hours is 0, it should be 12 for AM

// Creating date and time strings
const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
const time12HourFormat = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;

return {
  Date :dateString,
  Time : time12HourFormat
}
} 

module.exports = dateandtime;