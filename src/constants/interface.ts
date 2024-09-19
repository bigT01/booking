interface IIconProps{
    size?: number
}

interface option{
    id: string,
    label: string,
}

interface AirportsCodeAndName {
    name: string,
    code: string
}

interface AirportsByCountry {
    country: string,
    code: string,
    airports: AirportsCodeAndName[],
}