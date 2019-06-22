import React from 'react';
import Header from 'components/Header'
import UserTable from 'components/common/UserTable'

const App = () => {
    return (
        <div className='ui container'>
            <Header/>
            <UserTable />
        </div>
    );
};

export default App;