import React, { useState } from 'react';

import './App.css';
import Resume from './Resume/Resume';

const App = () => {

    const [ pageType, setPageType ] = useState('Resume');

    const renderApp = () => {
        switch(pageType) {
        case 'Resume':
            return <Resume
                setPageType={setPageType}
            />;
        case 'Project':
            return <div> ProjectStuff. </div>;
        default:
            return <div> ERROR. </div>;
        }
    };

    return (
        <>
            {renderApp()}
        </>
    );
    
};

export default App;
