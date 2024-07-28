import {create} from "zustand";

export interface IMovie {
    id: string,
    img: string,
    category: string[],
    starColor: string,
    name: string,
    bio: string,
    mainCategory: string
}

interface Seat {
    id: string,
    status: "Selected" | 'Available' | "Reserved"
}

interface IBooking {
    id: string,
    movieId: string,
    date: string[],
    time: string[],
    quality: string[],
    seats: Seat[]
}

interface IState {
    movies: IMovie[],
    booking: IBooking[]
}

export const useStore = create<IState>()((set) => ({
    movies: [
        {
            id: '1',
            bio: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers...',
            img: '/endGame.png',
            category: ['Action', 'Science fiction', 'Fantasy'],
            name: 'Avengers EndGame',
            mainCategory: 'Today',
            starColor: '#F74346'
        },
        {
            id: '3',
            bio: 'Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.',
            img: '/Glass.png',
            category: ['Drama', 'Horror', 'Sci-Fi'],
            name: 'Glass',
            mainCategory: 'Premieres',
            starColor: '#F18F01'
        }
    ],
    booking: [
        {
            id: '2',
            movieId: '1',
            date: ['1.05.2024', '2.05.2024', '3.05.2024', '4.05.2024', '5.05.2024'],
            time: ['8:45 PM', '11:30 PM', '01:00 AM'],
            quality: ['2D', "3D"],
            seats: [
                {
                    id: '1',
                    status: "Available"
                },
                {
                    id: '2',
                    status: "Available"
                },
                {
                    id: '3',
                    status: "Available"
                },
                {
                    id: '4',
                    status: "Available"
                },
                {
                    id: '5',
                    status: "Available"
                },
                {
                    id: '6',
                    status: "Available"
                },
                {
                    id: '7',
                    status: "Available"
                },
                {
                    id: '8',
                    status: "Available"
                },
                {
                    id: '9',
                    status: "Available"
                },
                {
                    id: '10',
                    status: "Available"
                },
            ]
        }
    ]
}))