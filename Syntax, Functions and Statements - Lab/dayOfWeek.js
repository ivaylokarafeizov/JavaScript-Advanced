function dayOfWeek(day) {
 const days = {
  'Monday': 1, 
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
  'Sunday': 7
 };

 if (!days[day]) {
  console.log('error');
 } else {
  console.log(days[day]);
 }
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');