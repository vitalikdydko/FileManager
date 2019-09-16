import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routing from '../routes/route.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routing />
                </div>
            </Router>
        );
    }
};

