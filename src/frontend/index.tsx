import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    const [db, setDb] = useState<any>({});

    const getDb = async () => {
        setDb('Loading...');
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/db`
        );
        const responseJson = await response.json();
        setDb(responseJson);
    };

    const updateDb = async () => {
        setDb('Loading...');
        const response = await fetch(
            `${import.meta.env.VITE_CANISTER_ORIGIN}/db/update`,
            {
                method: 'POST',
                headers: [['Content-Type', 'application/json']],
                body: JSON.stringify({
                    hello: 'world'
                })
            }
        );
        const responseJson = await response.json();
        setDb(responseJson);
    };

    useEffect(() => {
        getDb();
    }, []);

    return (
        <div>
            <h1>Azle Hello World</h1>
            <div>db: {JSON.stringify(db)}</div>
            <br />
            <div>
                <button onClick={getDb}>Test /db</button>
            </div>
            <br />
        </div>
    );
};

export default App;
