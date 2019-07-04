import React, { useState } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';


/* Content components */
import CurrencyContent from './CurrencyContent';
import DogsContent from './DogContent';
import TodosContent from './TodosContent';


import '../styles/App.scss';

/** 1. Setting the client according to which nav element it is*/
const setApolloClient = ( menuItem ) => {
	const details = () => {
		switch ( menuItem ) {
			case "currency":
				return "https://48p1r2roz4.sse.codesandbox.io";
			case "dogs":
				return "https://dog-graphql-api.glitch.me";
			default:
				return "not good path";
		}
	}
	const client = new ApolloClient({ uri: () => details() });
	

	return client;
};

const App = () => {
	const navLabels = [ 'currency', 'dogs', 'todos' ];
	const [ activeMenuItem, setActiveMenuItem ] = useState(navLabels[navLabels.length - 1]);
	const getContent = menuItem => {
		switch( menuItem ){
			case 'currency':
				return <CurrencyContent />
			case 'dogs':
				return <DogsContent />;
			case 'todos':
				return <TodosContent />;
			default:
				return <p>error</p>;
		}
	}


/**
 * ApolloProvider:
 * Allow you to connect your apolloClient to your app
 * It's an App wrapper providing a context to your app
 * in order to access data from anywhere ( --> by giving it access
 * through a client props whithin which one you pass your apolloclient instance )
 */
	return (
		<ApolloProvider client = { setApolloClient( activeMenuItem ) }>
			<div className = "App">
				<ul>
				{
					navLabels.map ( ( menuItem, idx ) => (
						<div key = { idx }>
							<li
								className = { `menu ${ activeMenuItem === menuItem ? 'active' : '' }`}
								onClick = { () => setActiveMenuItem( menuItem ) }
								>
								<span>{ menuItem }</span>
							</li>
						</div>
					))
				}
				</ul>
				<div className = "content">
					{ getContent( activeMenuItem ) }
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
