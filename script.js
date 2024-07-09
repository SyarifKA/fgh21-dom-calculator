const result = document.getElementById('result')
const button = document.getElementsByTagName('button')

Array.from(button).forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.currentTarget.textContent === ',') {
            if (result.textContent.includes(',') === false) {
                result.textContent +=','
            }
        } else if (result.textContent === '0') {
            result.textContent = event.currentTarget.textContent
        } else {
            result.textContent += event.currentTarget.textContent
        }
        if (event.currentTarget.textContent === '=') {
            if (result.textContent.includes('+')) {
                let arrNum = result.textContent.slice(0, -1).split('+')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = nums.reduce(myfunction)
                function myfunction(total, num) {
                    return total + num
                }
                result.textContent = calc
            }
            if (result.textContent.includes('-')) {
                let arrNum = result.textContent.slice(0, -1).split('-')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = nums.reduce(myfunction)
                function myfunction(total, num) {
                    return total - num
                }
                result.textContent = calc
            }
            if (result.textContent.includes('x')) {
                let arrNum = result.textContent.slice(0, -1).split('x')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = nums.reduce(myfunction)
                function myfunction(total, num) {
                    return total * num
                }
                result.textContent = calc
            }
            if (result.textContent.includes('/')) {
                let arrNum = result.textContent.slice(0, -1).split('/')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = nums.reduce(myfunction)
                function myfunction(total, num) {
                    return total / num
                }
                result.textContent = calc
            }
        }
        if (event.currentTarget.textContent === ('%')) {
            if (result.textContent.includes('%') === true) {
                let arrNum = result.textContent.slice(0, -1).split('/')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = 0
                nums.forEach((item) => {
                    calc += item
                })
                result.textContent = calc / 100
            }
        }
        if (event.currentTarget.textContent === ('+/-')) {
            if (result.textContent.includes('+/-') === true) {
                let arrNum = result.textContent.slice(0, -1).split('+/-')
                let nums = arrNum.map((num) => parseInt(num))
                let calc = 0
                nums.forEach((num) => {
                    calc += num *(-1)
                })
                result.textContent = calc
            }
        }
        if (event.currentTarget.textContent === 'AC') {
            result.textContent = '0'
        }
    })
})