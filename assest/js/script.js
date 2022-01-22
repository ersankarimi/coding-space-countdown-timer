// variabel element selector
const months = document.querySelector('#months-left')
const days = document.querySelector('#days-left')
const hours = document.querySelector('#hours-left')
const minutes = document.querySelector('#minutes-left')
const seconds = document.querySelector('#seconds-left')

// funtion to get current date
const currentDate = setInterval(() => {
	//days
	const diffDays =
		new Date(
			new Date().getFullYear(),
			new Date().getMonth() + 1,
			0
		).getDate() - new Date(new Date().getTime()).getDate()

	// months
	// const diffMonths = Math.floor(diffDays / 31)
	const diffMonths = Math.floor(
		new Date(new Date().getFullYear(), 11).getMonth() +
			1 -
			(new Date(new Date().getTime()).getMonth() + 1)
	)

	// hours
	const diffHours = Math.floor(24 - new Date().getHours() - 1)

	// minutes
	const diffMinutes = Math.floor(60 - new Date().getMinutes() - 1)

	// seconds
	const diffSeconds = Math.floor(60 - new Date().getSeconds() - 1)

	// set to display
	days.innerText = diffDays
	months.innerText = diffMonths
	hours.innerText = diffHours
	minutes.innerText = diffMinutes
	seconds.innerText = diffSeconds
}, 1000)
