const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.textContent = '0'

    const increaseCounts = () => {
        const data = +counter.getAttribute('data-target')
        const count = +counter.textContent

        const increment = data / 500

        if(count < data) {
            counter.textContent = `${Math.ceil(count + increment)}`
            setTimeout(increaseCounts, 1)
        } else {
            counter.textContent = data
        }
    }

    increaseCounts()
})