document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const startYear = today.getFullYear();
    const endYear = 2027;
    const bookingData = {
        // **MANUALLY ADD YOUR BOOKINGS HERE**
         // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
          // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
           // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
            // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
        '2025-03-06': 'Megan & James',
        '2025-03-07': 'Megan & James',
        '2025-03-08': 'Megan & James',
        '2025-03-09': 'Megan & James',
        '2025-03-10': 'Megan & James',
        '2025-03-28': 'Sharlea',
        '2025-03-29': 'Sharlea',
        '2025-03-30': 'Sharlea',
        '2025-12-25': 'Santa Claus',
        '2025-04-24': 'Tris & Court',
        '2025-04-25': 'Tris & Court',
        '2025-05-03': 'Dave',
        '2025-05-04': 'Dave',
        '2025-05-05': 'Dave',
        '2025-05-06': 'Dave',
        '2025-05-07': 'Dave',
        '2025-05-08': 'Dave',
        '2025-05-09': 'Dave',
        '2025-05-10': 'Dave',
        '2025-05-11': 'Dave',
        '2025-04-26': 'Depot Beach BBQ',
        '2026-03-01': 'Bob Builder',
        '2027-04-15': 'Charlie Chaplin'
        // Add more dates and names as needed.  Use the YYYY-MM-DD format.
        // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
          // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
           // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
            // **MAKE SURE TO UPDATE THE VERSION NUMBER TO BUST THE CACHE!!!**
    };

    // Function to check if a date is booked
    function isDateBooked(dateString) {
        return bookingData[dateString] !== undefined;
    }

    // Function to generate the calendar
    function generateCalendar() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dayNames.forEach(day => {
            const dayNameCell = document.createElement('div');
            dayNameCell.classList.add('day-name');
            dayNameCell.textContent = day;
            calendar.appendChild(dayNameCell);
        });


         for (let year = startYear; year <= endYear; year++) {
            for (let month = 0; month < 12; month++) {

                // Add month name
                const monthNameCell = document.createElement('div');
                monthNameCell.classList.add('month-name');
                monthNameCell.textContent = monthNames[month] + " " + year;
                calendar.appendChild(monthNameCell);

                const firstDayOfMonth = new Date(year, month, 1);
                const lastDayOfMonth = new Date(year, month + 1, 0);
                const startingDayOfWeek = firstDayOfMonth.getDay();

                for (let i = 0; i < startingDayOfWeek; i++) {
                    const emptyCell = document.createElement('div');
                    calendar.appendChild(emptyCell);
                }

                for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
                    const dateCell = document.createElement('div');
                    dateCell.classList.add('date-cell');
                    // Create Date object using UTC (crucial change)
                    const date = new Date(Date.UTC(year, month, day)); // Use UTC to avoid timezone issues
                    const dateString = date.toISOString().slice(0, 10);

                    let cellContent = day; // Default content: just the day number

                    if (isDateBooked(dateString)) {
                        dateCell.classList.add('booked');
                        cellContent = `${day}<br>${bookingData[dateString]}`;  // Add name here!
                        dateCell.innerHTML = cellContent;  // Use innerHTML to allow the <br>
                    } else {
                        dateCell.textContent = day;
                    }


                    if (date.toDateString() === today.toDateString() && year === startYear) { //Only highlight today for current year
                        dateCell.classList.add('today');
                    }

                    calendar.appendChild(dateCell);
                }
            }
        }
    }

    generateCalendar();
});