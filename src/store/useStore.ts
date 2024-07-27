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

interface IState {
    movies: IMovie[]
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
    ]
}))