import React, { useState } from 'react';
import { QueryDogs } from '../graphql/QueryDogs';
import { QueryDog } from '../graphql/QueryDog';

export default function DogContent () {
  const [ breedDog, setBreedDog ] = useState(null);
  return (
    <div id = "dog-content">
        <h1 className = "title">Dogs queries</h1>
        <QueryDogs onDogSelected = { ( e ) => setBreedDog( e.target.value )}/>
        {
          breedDog && (
            <QueryDog breed = { breedDog }/>
          )
        }
    </div>
  )
}
