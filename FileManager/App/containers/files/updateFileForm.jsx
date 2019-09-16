import React from 'react';

export default class UpdateForm extends React.Component {

    render() {
        let displayName = this.props.newFileName ? this.props.newFileName : this.props.name;
        return (
            <div className="formStyle">
                <div className="box">
                    <div className="row">Name: <input type="input" value={displayName} onChange={(e) => this.props.updateName(e.target.value)} /></div>
                    <div><input type="button" value="Update" onClick={() => this.props.updateFile(this.props.fileId, displayName, this.props.folderId)} /></div>
                </div>
            </div>
        );
    }
};