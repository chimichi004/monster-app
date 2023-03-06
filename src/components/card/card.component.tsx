import React from 'react';


export const Card = ({monster}:any) => {
    return <div className='card-container'>
        <img src={`https://robohash.org/${monster.id}?set=set2`} alt="" />
        <h1 key={monster.id}>{monster.name}</h1>
        <p>{monster.email}</p>
    </div>
}