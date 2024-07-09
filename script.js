const result = document.getElementById('result')
const button = document.getElementsByTagName('button')
const arrAritmatic = ['+', '-', 'x', '/']

Array.from(button).forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.currentTarget.textContent === '.') {
            arrAritmatic.forEach((e) => {
                if (result.textContent.includes(e)) {
                    result.textContent += '.'
                }
            })
            if (result.textContent.includes('.') === false) {
                result.textContent +='.'
            }
        } else if (result.textContent === '0') {
            result.textContent = event.currentTarget.textContent
        } else {
            result.textContent += event.currentTarget.textContent
        }
        if (event.currentTarget.textContent === '=') {
            if (result.textContent.includes('=')=== false) {
                result.textContent = '0'
            } else if(result.textContent.includes('=') === true) {
                if (result.textContent.includes('+')) {
                    let arrNum = result.textContent.slice(0, -1).split('+')
                    let nums = arrNum.map((num) => Number(num))
                    let calc = nums.reduce(myfunction)
                    function myfunction(total, num) {
                        return total + num
                    }
                    result.textContent = calc
                    return
                }
                if (result.textContent.includes('x')) {
                    let arrNum = result.textContent.slice(0, -1).split('x')
                    let nums = arrNum.map((num) => Number(num))
                    let calc = nums.reduce(myfunction)
                    function myfunction(total, num) {
                        return total * num
                    }
                    result.textContent = calc
                    return
                }
                if (result.textContent.includes('/')) {
                    let arrNum = result.textContent.slice(0, -1).split('/')
                    let nums = arrNum.map((num) => Number(num))
                    let calc = nums.reduce(myfunction)
                    function myfunction(total, num) {
                        return total / num
                    }
                    result.textContent = calc
                    return
                }
                if (result.textContent.includes('-')) {
                    let arrNum = result.textContent.slice(0, -1).split('-')
                    let nums = arrNum.map((num) => Number(num))
                    let calc = nums.reduce(myfunction)
                    function myfunction(total, num) {
                        return total - num
                    }
                    result.textContent = calc
                    return
                }
            }
        }
            
        if (event.currentTarget.textContent === ('%')) {
            if (result.textContent.includes('%') === true) {
                let arrNum = result.textContent.slice(0, -1).split('/')
                let nums = arrNum.map((num) => Number(num))
                let calc = 0
                nums.forEach((item) => {
                    calc += item
                })
                result.textContent = calc / 100
            }
        }
        if (event.currentTarget.textContent === ('+/-')) {
            if (result.textContent.includes('+') === true) {
                let arrNum = result.textContent.slice(0, -3).split('+')
                console.log(arrNum)
                let calc = []
                arrNum.forEach((elem, idx, arr) => {
                    if (idx === arr.length - 1) {
                        elem = elem * -1
                        calc.push(elem)
                    } else {
                        calc.push(elem)
                    }
                })
                const strResult = calc.join('+')
                result.textContent = strResult
            }
        }
        if (event.currentTarget.textContent === 'AC' || event.currentTarget.textContent === '=') {
            result.textContent = '0'
        }
    })
})