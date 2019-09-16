import React from 'react';

export default class NewForm extends React.Component {

    render() {
        return (
            <div className="formStyle">
                <div className="box">
                <div className="row">Name: <input type="input" value={this.props.name} onChange={(e) => this.props.changeName(e.target.value)} /></div>
                    <div className="actionBlock"><input type="button" value="Create" onClick={() => this.props.newFolder(this.props.name)} /></div>
                    </div>
            </div>
        );
    }
};