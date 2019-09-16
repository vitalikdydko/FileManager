import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import UploadForm from './uploadForm.jsx';
import File from './file.jsx';
import { getFiles, deleteFile, updateFile } from './fileActions.jsx';
import "isomorphic-fetch";

class FilesTree extends React.Component {
    constructor(props) {
        super(props);
        this.deleteFile = this.deleteFile.bind(this);
        this.updateFile = this.updateFile.bind(this);
    }

    componentDidMount() {
        const parsed = queryString.parse(location.search);
        if (parsed) {
            this.props.getFiles(parsed['folderId']);
        }
    }

    deleteFile(fileId, folderId) {
        this.props.deleteFile(fileId, folderId);
    }

    updateFile(fileId, name, folderId) {
        this.props.updateFile(fileId, name, folderId);
    }

    changeEditFile(file) {
        this.props.changeEditFile(file);
    }

    render() {
        let files = this.props.data.fileList.map(item => {
            return (
                <File key={item.fileId} file={item} deleteFile={this.deleteFile} />
            );
        });

        return (
            <div id="file">
                <UploadForm />
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Modified</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        {files}
                    </table>
                </div>
            </div>
        );
    };
};

let mapProps = (state) => {
    return {
        data: state.file.data,
        fileName: state.file.fileName,
        editFile: state.file.editFile,
        error: state.file.error
    };
};

let mapDispatch = (dispatch) => {
    return {
        getFiles: bindActionCreators(getFiles, dispatch),
        deleteFile: bindActionCreators(deleteFile, dispatch),
        updateFile: bindActionCreators(updateFile, dispatch)
    };
};

export default connect(mapProps, mapDispatch)(FilesTree);