import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';


export function QueryDog({ breed }) {

    /**
     * Here we had to specify this query structure in order to work 
     * with dynamic value with the attribute variables
     */
    const queryProps = {
        query: gql `
            query dog ( $breed: String! ){
                dog( breed: $breed ){
                    id
                    displayImage
                    breed
                }
            }`,
        variables : { breed }
    };
    return (
        <Query { ...queryProps }>
           {
               ({loading, error, data}) => {
                   return (
                       loading
                            ? <p>Loading ...</p>
                            : error ? <p>Error: { error }</p>
                            : <img src = { data.dog.displayImage } alt = {` a ${ data.dog.breed }`} width= "300px"/>
                   )
               }
           }
        </Query>
    )
}
