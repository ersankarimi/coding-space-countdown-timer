// variabel element selector
const months = document.querySelector("#months-left")
const days = document.querySelector("#days-left")
const hours = document.querySelector("#hours-left")
const minutes = document.querySelector("#minutes-left")
const seconds = document.querySelector("#seconds-left")

// final date
const finalDate = new Date("Jan 1, 2022 00:00:00")
console.log(finalDate.getTime());

// funtion to get current date
const currentDate = setInterval(() => {
    const currentDate = new Date()

    // search diff between 2 dates
    const diffDate = finalDate.getTime() - currentDate.getTime()

    // search months, days, hours, minutes, seconds diff

    //days
    const diffDays = Math.floor(diffDate / 86400000)


    // months
    const diffMonths = Math.floor(diffDays / 31);

    // hours
    const diffHours = Math.floor(diffDate % 86400000 / 3600000)

    // minutes
    const diffMinutes = Math.floor(diffDate % 3600000 / 60000)

    // seconds
    const diffSeconds = Math.floor(diffDate % 60000 / 1000)

    // set to display
    days.innerText = diffDays - (31 * diffMonths)
    months.innerText = diffMonths
    hours.innerText = diffHours
    minutes.innerText = diffMinutes
    seconds.innerText = diffSeconds

}, 1000);