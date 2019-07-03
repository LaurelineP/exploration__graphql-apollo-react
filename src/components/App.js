import React, { useState } from 'react';
import '../styles/App.scss';

import CurrencyContent from './CurrencyContent';
import DogContent from './DogContent'

const App = () => {
	const [ activeMenuItem, setActiveMenuItem ] = useState('currency');
	const navLabels = [ 'currency', 'dog' ];
	const getContent = menuItem => {
		switch( menuItem ){
			case 'currency':
				return <CurrencyContent />
			case 'dog':
				return <DogContent />;
			default:
				return <p>error</p>;
		}
	}

	return (
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
	);
}

export default App;
