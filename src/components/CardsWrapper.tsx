"use client"
import React from 'react';
import Card from "@/components/card";
import {useStore} from "@/store/useStore";

const CardsWrapper = () => {
    const movies = useStore(state => state.movies)
    return (
        <div className='px-8 gap-4 flex overflow-y-hidden overflow-x-scroll'>
            {movies.map((movie) => (
                <Card key={movie.id} id={movie.id} name={movie.name} colorStar={movie.starColor} img={movie.img}
                      category={movie.mainCategory}/>
            ))}
        </div>
    );
};

export default CardsWrapper;