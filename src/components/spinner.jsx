import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './spinner.css';

class Spin extends React.Component {
    render() {
        return (
            <div className="spinner">
                <Spinner animation="border" variant="secondary" className="centered-spinner"/>
            </div>
        )
    }
}
export default Spin;