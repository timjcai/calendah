import { addDays, toDate } from "date-fns"
import { convert12to24time } from "./TimeUtils"

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

export const generateColumnId = (input: Date): string => {
    const day = input.getDay()
    const date = input.getDate()
    const month = input.getMonth()
    const year = input.getFullYear()

    return `col${day}--${date}-${month}-${year}`
}

export const getYYYYMMDD = (input: Date): string => {
    const date = addZero(input.getDate())
    const month = addZero(input.getMonth() + 1)
    const year = input.getFullYear()

    return `${year}-${month}-${date}`
}

export const generateStartandEndDate = (input: Date[]): string[] => {
    const start_date = getYYYYMMDD(input[0])
    const end_date_index = input.length -1
    const end_date = endDatePlusOne(getYYYYMMDD(input[end_date_index]))

    return [start_date, end_date]
}

export const rubyDateConverter = (rubyDateString: string): Date => {
    return new Date(rubyDateString)
}

export const addZero = (input: number): string => {
    if (input<10) {
        return `0${input}`
    } else {
        return `${input}`
    }
} 

interface getTimeProps {
    hours: number,
    minutes: number
}

export const getTime = (input: Date): getTimeProps=> {
    const hours = input.getHours()
    const mins = input.getMinutes()
    return {hours: hours, minutes: mins}
}

export const endDatePlusOne = (input: string): string => {
    const test = input.split('-')
    const newDate = parseInt(test[2])+1
    test[2] = addZero(newDate)
    return test.join('-')
}

export const mergeDateTime = (date, time) => {
    const setDate = date
    const setTime = time
    const newdate = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    setTime.setFullYear(year)
    setTime.setMonth(month)
    setTime.setDate(newdate)
    return setTime
}