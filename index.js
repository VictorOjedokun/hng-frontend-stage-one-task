// JavaScript for displaying current date and day
function displayCurrentDateAndDay() {
    const currentDate = new Date();
    
    // Get the day of the week and format it
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get the current date and format it (e.g., "September 12, 2023")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Display the date and day on the HTML elements
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = "Day: " + dayOfWeek;
    document.querySelector('[data-testid="currentDate"]').textContent = "Date: " + formattedDate;
}


displayCurrentDateAndDay();
