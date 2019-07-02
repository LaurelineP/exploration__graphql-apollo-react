import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

/** 1. Setting the client */
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

/** 2. Make a query to the client */
client.query({
	query: gql`
		{
			rates(currency: "USD") {
        	currency
      }
    }
  `
})

/**
 * ApolloProvider:
 * Allow you to connect your apolloClient to your app
 * It's an App wrapper providing a context to your app
 * in order to access data from anywhere ( --> by giving it access
 * through a client props whithin which one you pass your apolloclient instance )
 */

ReactDOM.render(
	<ApolloProvider client = { client }>
		<App />
	</ApolloProvider>
	, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
