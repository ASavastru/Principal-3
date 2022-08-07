let nav = 0;
// Tracks clicks for prevMonth and nextMonth with increments

let clicked = null;
// receives date of day clicked by user

let appointments = localStorage.getItem('appointments') ?JSON.parse(localStorage.getItem('appointments')) : [];
// array of appointment objects that exists in localstorage
// JSON.parse turns appointments into a string so they can be stored in localstorage
// it either returns an array of appointment objects or an empty array

const calendar = document.getElementById('calendar');
const interstitialModal = document.getElementById('interstitialModal');
const newAppointmentModal = document.getElementById('newAppointmentModal');
const deleteAppointmentModal = document.getElementById('deleteAppointmentModal');
const backDrop = document.getElementById('modalBackDrop');
// const appointmentTitleInput = document.getElementById('appointmentTitleInput');
// these constants are declared globally because they're used everywhere
// they reference to ids

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// the weekdays never change therefore they can be constant
// this array helps determine padding days

function load() {
    let dt = new Date();
    // current date is assigned to dt
    //line 27

    let getURL = window.location.href;
    // object that can be used to get the current
    // page address (URL) and to redirect the browser to a new page.

    getURL = new URL(getURL);
    let x = getURL.searchParams.get("selectedDate");

    if(x !== null) {
        let date = new Date();
        dateArray = x.split("-");
        date.setFullYear(dateArray[0]);
        date.setMonth(dateArray[1]);
        date.setDate(dateArray[2]);
        // dt = date;
    }

    // getURL gets url
    // x gets after /? in url
    // if x!==null (no date selected means x=null)
    // changes dt to date

    nav = localStorage.getItem("navigator") ?JSON.parse(localStorage.getItem('navigator')) : [];
    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }
    // since dt determines what month/year is shown,
    // changing month value by adding nav to it changes the
    // month displayed

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    // easier to work with simple constants

    const daysInMonth = new Date(year, month+1, 0).getDate();
    // month+1 because "month" is kind of like an index value
    // a.k.a. jan === 0, jul === 6, dec === 11
    // but date === 0 and this gives us the date of the
    // last date of the previous month in relation to month+1.
    //.getDate stringifies it

    const firstDayOfMonth = new Date(year, month, 1);
    // adds first day of a given month to this constant which
    // allows me to easily access the actual weekday in order to
    // correctly display the start of the month and, by extension,
    // the entirety of the month

    const dateString = firstDayOfMonth.toLocaleDateString('en-UK', {
        weekday: 'long', //gives me name of day linked to date
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    // constructs dateString object that makes calculating paddingDays easy
    // toLocaleDateString() method returns a string with the date

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    // padding days represent the beginning days of a week that are not
    // a part of the month that is viewed by the user at a given moment.
    // .split(', ')[0] returns ONLY the weekday linked to the specific
    // date of the first day of month

    document.getElementById('monthDisplay').innerText =
        getMonthNameByNumber(dt.getMonth()+1) + " " + dt.getFullYear();
        //`${dt.toLocaleDateString('en-UK', {month: 'long'})} ${year}`;
    // sends month and year to html in order to be displayed in the page

    function getMonthNameByNumber(monthNumeric){
        return moment(monthNumeric, 'M').format('MMMM');
    }

    calendar.innerHTML = '';
    // whenever load() is called but before
    // constructing the calendar, the calendar clears
    // a.k.a. all squares, padding or daySquare

    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        // i <= paddingDays + daysInMonth because
        // we have to render the padding days too

        const daySquare = document.createElement('div');
        // for every single iteration we create a div

        daySquare.classList.add('day');
        // adds day number to div

        const dayString = `${i - paddingDays}/${month + 1}/${year}`;

        if (i > paddingDays) {
            // logic that determines if
            // a padding day needs to be rendered
            // or a daySquare
            let monthAdjust = dt.getMonth() + 1;
            let selectedDate = dt.getFullYear().toString() + "-" + monthAdjust.toString() + "-" + (i-paddingDays).toString();
            // creates date format for each day
            // for use in daySquare.setAttribute
            // e in div data

            daySquare.innerText = i - paddingDays;
            daySquare.setAttribute('data-date', selectedDate); // data-***** is a thing
            // renders the day in the div

            const appointmentForDay = appointments.find(e => e.date === dayString);
            // checks if there is an appointment in the day
            // and adds it to appointmentForDay

            if ( i - paddingDays === day && nav === 0 ) {
                daySquare.id = 'currentDay';
            }
            // checks for current day and applies styling to it

            if(appointmentForDay) {
                const appointmentDiv = document.createElement('div');
                // appointmentDiv.classList.add('appointment');
                // appointmentDiv.innerText = appointmentForDay.title+" "+nameTest;
                daySquare.appendChild(appointmentDiv);
            }
            // if there is one,
            // shows appointment

            daySquare.addEventListener('click', function () {
                let clickedDate = this.dataset.date;
                // document.getElementById('selectedDate').value = clickedDate;
                document.getElementById('storeDate').innerText = clickedDate;
                interstitialModal.style.display = 'block';
                backDrop.style.display = 'block';
            })

        } else {
            daySquare.classList.add('padding');
            // this makes sure that it doesn't have the
            // same style as a daySquare
        }

        calendar.appendChild(daySquare);
    }
}

// function sendAxios() {
//     let params = new URLSearchParams();
//     params.append('parameter', 'value');
//     axios.post('/engine.php', params).then(response => {
//         console.log(response)
//     });
// }

function openViewAppointmentsModal(date) {
    document.getElementById('insertedDate').setAttribute('value', date);
    backDrop.style.display  = 'block';
    document.getElementById('submitAppointmentInformation').click();
}

function openCreateAppointmentModal(date) {
    // function that opens the modal
    clicked = date;
    // ref: line 5
    document.getElementById('checkViewOrCreate').setAttribute('value', 'ok');
    document.getElementById('insertedDate').setAttribute('value', date);
    backDrop.style.display = 'block';
    newAppointmentModal.style.display = 'block';
    // changes style of backDrop a.k.a. shows it
}

function closeModal() {
    newAppointmentModal.style.display = 'none';
    deleteAppointmentModal.style.display = 'none';
    backDrop.style.display = 'none';
    // appointmentTitleInput.value = '';
    clicked = null;
    // closes/clears/resets everything related to the modal

    load();
}

function saveAppointment() {
    if (appointmentTitleInput.value) {
        // if there is a value typed into the input

        appointmentTitleInput.classList.remove('error');
        // removes error style if there was any

        appointments.push({
            date: clicked,
            title: appointmentTitleInput.value,
        });
        // pushes an object into appointments array

        localStorage.setItem('appointments', JSON.stringify(appointments));
        // re-stores appointments array stringified

        closeModal();
    } else {
        appointmentTitleInput.classList.add('error');
        // adds error styling
    }
}

function deleteAppointment() {
    appointments = appointments.filter(e => e.date !== clicked);
    // filters out clicked appointment

    localStorage.setItem('appointments', JSON.stringify(appointments));
    // resets appointments in localStorage
    closeModal();
}

function initButtons() {
    document.getElementById("nextButton").addEventListener('click', () => {
        nav++;
        localStorage.setItem("navigator", nav); // stores nav as long as
        load();
    });
    // increments nav on nextButton click and reloads page to display next month

    document.getElementById("backButton").addEventListener('click', () => {
        nav--;
        localStorage.setItem("navigator", nav); // stores nav as long as
        load();
    });
    // decrements nav on backButton click and reloads page to display previous month

    document.getElementById('saveButton').addEventListener('click', saveAppointment);

    document.getElementById('cancelButton').addEventListener('click', () => {
        //eliminates error style when cancelButton isClicked
        closeModal();
    });

    document.getElementById('deleteButton').addEventListener('click', deleteAppointment);

    document.getElementById('closeButton').addEventListener('click', closeModal);

    document.getElementById('viewAppointment').addEventListener('click', () => {
        openViewAppointmentsModal(document.getElementById('storeDate').innerText);
        interstitialModal.style.display = 'none';
        backDrop.style.display = 'none';
    });

    document.getElementById('createAppointment').addEventListener('click', () => {
        openCreateAppointmentModal(document.getElementById('storeDate').innerText);
        interstitialModal.style.display = 'none';
        backDrop.style.display = 'none';
    });
}

load(); // loads calendar
initButtons(); // initializes buttons


