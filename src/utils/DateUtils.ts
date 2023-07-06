export const today = new Date()

export const randomDate = new Date("2024-03-15")

import { addDays, toDate } from "date-fns"

// console.log(randomDate)
// console.log(today.getDate())
// console.log(today.getFullYear())
// console.log(today.getDay())
// console.log(today.getMonth())


// sets the week and returns an array starting from Monday
export const thisWeek = (input: Date): Date[] => {
    const dateArray = new Array(7)
    dateArray.fill([])
    const startDay = input.getDay()
    dateArray[startDay] = input
    for (let i = 0; i < 7; i++ ) {
        if (dateArray[i].length===0) {
            const date = toDate(addDays(input, (i-startDay)))
            dateArray[i] = date
        }
    }
    return dateArray
}

export const generateDateId = (input: Date): string => {
    const date = input.getDate()
    const month = input.getMonth()
    const year = input.getFullYear()

    return `${date}-${month}-${year}`
}