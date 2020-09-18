import React, { useState } from 'react';

import './App.css';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import _ from 'lodash';


const App = () => {

    const [ pageType, setPageType ] = useState('Resume');

    const renderApp = () => {
        switch(pageType) {
        case 'Resume':
            return <Resume
                setPageType={setPageType}
            />;
        default:
            return <Projects
                pageType={pageType}
                setPageType={setPageType}
            />;
        }
    };

    return (
        <>
            {renderApp()}
        </>
    );
    
};

export default App;
