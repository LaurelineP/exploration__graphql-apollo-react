import React, { useState } from 'react';
import { QueryCurrency } from './graphql/QueryCurrency';
import './App.css';

const App = () => {
	const [ activeMenuItem, setActiveMenuItem ] = useState('currency');
	const [ button, setButton ] = useState({ label: "Make request" });

	const handleClick = {
		request: () => setButton({ didRequest: true, label:'Reset' }),
		reset: () => setButton ({ didRequest: false, label: 'Make request' }),
		navigate: ( menuItem ) => setActiveMenuItem( menuItem )
	}

	const navLabels = [ 'currency' ];
	
	const { didRequest, label } 			= button;
	const { request, reset, navigate } 	= handleClick;
	const trigger = didRequest ? reset : request;

	return (
		<div className = "App">
			<ul>
			{
				navLabels.map ( ( menuItem, idx ) => (
					<div key = { idx }>
						<li
							className = { `menu ${ activeMenuItem === menuItem ? 'active' : '' }`}
							onClick = { () => navigate( menuItem ) }
							>
							<span>{ menuItem }</span>
						</li>
					</div>
				))
			}
			</ul>
			<div className = "content">
				{
					activeMenuItem === 'currency' && 
					<div>
						<h1 className = "title">Currency queries</h1>
						<button onClick = { trigger }>{ label }</button>
						{ didRequest && <QueryCurrency /> }
					</div>
				}
			</div>
		</div>
	);
}

export default App;
