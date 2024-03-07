import React, { useState,useEffect } from 'react';

function Authentication({ onAuthenticated }) {
    const [userName, setUsername] = useState('');
    const [passWord, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            console.log(userName,passWord);
            const response = await fetch('http://localhost:8081/api/customer_master/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, passWord }),
            });
            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }
            const data = await response.json();
            onAuthenticated(data.token);
        } catch (error) {
            console.error('Authentication error:', error);
            // Handle authentication error
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" value={userName} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={passWord} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}



function DataFetching({ token }) {
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        fetch('http://localhost:8081/api/customer_master/1', {
            method: 'GET',
            headers: headers,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setCustomer(data))
            .catch(error => setError(error.message));
        
    }, [token]);

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="card text-center m-3">
                <h5 className="card-header">Customer Details</h5>
                <div className="card-body">
                    {customer && (
                        <>
                            <p>Customer ID: {customer.custId}</p>
                            <p>First Name: {customer.firstName}</p>
                            <p>Last Name: {customer.lastName}</p>
                            {/* Add other fields you need */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}



function JWTCostMaster() {
    const [token, setToken] = useState(null);

    const handleAuthenticated = (token) => {
        setToken(token);
    };

    return (
        <div>
            {!token ? (
                <Authentication onAuthenticated={handleAuthenticated} />
            ) : (
                <DataFetching token={token} />
            )}
        </div>
    );
}

export default JWTCostMaster;

