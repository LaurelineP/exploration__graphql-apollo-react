import React, { useState } from 'react'
import { QueryCurrency } from '../graphql/QueryCurrency';

export default function CurrencyContent() {
	const [ button, setButton ] = useState({ label: "Make request" });
    const { didRequest, label } = button;
    const handle = {
        request: () => setButton({ didRequest: true, label:'Reset' }),
        reset: () => setButton ({ didRequest: false, label: 'Make request' })
    };
	const trigger = didRequest ? handle.reset : handle.request;
    return (
        <div>
            <h1 className = "title">Currency queries</h1>
            <button onClick = { trigger }>{ label }</button>
            { didRequest && <QueryCurrency /> }
        </div>
    )
}
