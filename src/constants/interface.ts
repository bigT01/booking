export interface IIconProps{
    size?: number
}

export interface LabelForm{
    id: string,
    label: string,
}

interface AirportsCodeAndName {
    name: string,
    code: string
}

export interface AirportsByCountry {
    country: string,
    code: string,
    airports: AirportsCodeAndName[],
}

export interface CalendarDayFormat {
    day: number,
    isThisMonth: boolean
}