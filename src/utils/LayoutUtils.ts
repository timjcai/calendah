import { timeMappings12to24 } from "../db/Mapping"
import { convert24stringto24time } from "./TimeUtils"

export const calcIndividualColWidth = (viewSettings: number): string => {
    return `${70/viewSettings}vw`
}

// dependent on the column id being presented in this format: "colX--DD-MM-YYYY"
export const extractDate = (columnId: string) => {
    const dateArray = columnId.split('-')
    const extractedDate = new Date()
    extractedDate.setDate(parseInt(dateArray[2]))
    extractedDate.setMonth(parseInt(dateArray[3]))
    extractedDate.setFullYear(parseInt(dateArray[4]))
    return extractedDate
}

// dependent on the cell id being presented in this format: "colX--DD-MM-YYYY| 5 AM"
export const extractTime = (cellId: string): Date => {
    const timeArray = cellId.split("|")
    const Time12HR = timeArray[1]
    return convert24stringto24time(timeMappings12to24[Time12HR])
}