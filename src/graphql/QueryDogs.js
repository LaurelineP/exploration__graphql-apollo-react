import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

export const QueryDogs = ({ onDogSelected }) => {
    const queryProps = {
        query : gql`
        {
            dogs {
                id
                breed
            }
        }`
    };
    return (
        <Query {...queryProps } >
            { 
                ({ loading, error, data }) => {
                    if( loading ) return <p>Loading...</p>
                    if( error ) return <p>Error: { error.message  }</p>
                    return (
                        <select id = "dog" name = "dog" onChange = { onDogSelected }>
                            { data.dogs.map( dog => (
                                <option key = { dog.id } value = { dog.breed }>
                                    { dog.breed }
                                </option>
                            )) }
                        </select>
                    )
                }
            }
        </Query>
       )
};
