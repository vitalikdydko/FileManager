import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Folder extends React.Component {

    render() {
           let deleteBlock = <div className="action">&nbsp;&nbsp;&nbsp;<a className="link" onClick={() => {
               if (confirm('Are you sure you want to delete the folder?')) {
                   this.props.deleteFolder(this.props.folder.folderId);
                    }
        }}>remove</a></div>;

        let updateBlock = <div className="action">&nbsp;&nbsp;&nbsp;<a className="link" onClick={() => {
            this.props.changeEditFolder(this.props.folder);
            this.props.changeEditStatus(!this.props.isEdit);
        }}>update</a></div>;

        let filesLink = <Link  to={"/folders/files?folderId=" + this.props.folder.folderId} key={this.props.folder.folderId}>{this.props.folder.name}</Link>;

        return (
            <ul className="folder" id="simple_list">
                <li className="widget-title">{filesLink}</li>
                {deleteBlock}
                {updateBlock}
                </ul>
        );
    }
};