import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
 /**
 * Query: Request data
 * Query is a react component exported from: react-apollo
 * that uses the render prop pattern to share GraphQL data with your UI
 * - use Query to wrap the UI rendering 
 * 
 */
export const QueryCurrency = () => {
	const query = {
		query: gql `
		{
			rates ( currency : "USD" ){
				currency
				rate
			}
		}
		`
	}
	return (
		<Query {...query }>
			{
				({ loading, error, data }) => {
					if( loading ) return <p>Loading...</p>;
					if( error ) return <p>Error: { error.message }</p>

					return data.rates.map(({ currency, rate }) => (
						<div key = { currency } >
							<p>{ currency }: { rate }</p>
						</div>
					))
				}
			}
		</Query>
	)
}