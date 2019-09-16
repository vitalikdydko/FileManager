import React from 'react';

export default class File extends React.Component {

    render() {
        let deleteBlock = <div className="action">&nbsp;&nbsp;&nbsp;<a className="link" onClick={() => {
            if (confirm('Are you sure you want to delete the file?')) {
                this.props.deleteFile(this.props.file.fileId, this.props.file.folderId);
            }
        }}>remove</a></div>;

        let updateBlock = <div className="action">&nbsp;&nbsp;&nbsp;<a className="link" onClick={() => {
            this.props.changeEditFile(this.props.file);
            this.props.changeEditStatus(!this.props.isEdit);
        }}>update</a></div>;


        return (
                <tr>
                    <td>
                        {this.props.file.name}
                    </td>
                    <td>
                        {this.props.file.date}
                    </td>
                    <td>
                        {deleteBlock}
                    </td>
                    <td>
                        {updateBlock}
                    </td>
                </tr>
        );
    }
};