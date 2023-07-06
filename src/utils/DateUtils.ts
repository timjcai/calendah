import { addDays, toDate } from "date-fns"

// sets the week and returns an array starting from Monday
export const thisWeek = (input: Date, size: number): Date[] => {
    const dateArray = new Array(size)
    dateArray.fill([])
    const startDay = input.getDay()
    dateArray[startDay] = input
    for (let i = 0; i < size; i++ ) {
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

export const generateColumnId = (input: Date): string => {
    const day = input.getDay()
    const date = input.getDate()
    const month = input.getMonth()
    const year = input.getFullYear()

    return `col${day}--${date}-${month}-${year}`
}