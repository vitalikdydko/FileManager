import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import NewFolderForm from './newFolderForm.jsx';
import UpdateFolderForm from './updateFolderForm.jsx';
import Folder from './folder.jsx';
import { getFiles} from '../files/fileActions.jsx';
import { getFolders, changeName, newFolder, updateFolder, deleteFolder, changeEditFolder, changeEditStatus} from './folderActions.jsx';
import "isomorphic-fetch";

class FoldersTree extends React.Component {
    constructor(props) {
        super(props);
        this.deleteFolder = this.deleteFolder.bind(this);
        this.updateFolder = this.updateFolder.bind(this);
        this.changeEditFolder = this.changeEditFolder.bind(this);
        this.changeEditStatus = this.changeEditStatus.bind(this);
    }

    componentDidMount() {
        const parsed = queryString.parse(location.search);
        if (parsed) {
            this.props.getFolders();
        }
    }

    deleteFolder(folderId) {
        this.props.deleteFolder(folderId);
    }

    updateFolder(folderId, name) {
        this.props.updateFolder(folderId, name);
    }

    changeEditFolder(folder) {
        this.props.changeEditFolder(folder);
    }

    changeEditStatus(status) {
        this.props.changeEditStatus(status);
    }

    render() {
       let folders = this.props.data.folderList.map(item => {
           return (
               <Folder key={item.folderId} folder={item} isEdit={this.props.isEdit} changeEditStatus={this.changeEditStatus} changeEditFolder={this.changeEditFolder} deleteFolder={this.deleteFolder} getFiles={this.props.getFiles} />
            );
        });
        
        let formDisplay = this.props.isEdit ?
            <UpdateFolderForm
            name={this.props.editFolder.name}
            updateName={this.props.changeName}
            newFolderName={this.props.folderName}
            folderId={this.props.editFolder.folderId}
            updateFolder={this.updateFolder} />
            :
            <NewFolderForm
                name={this.props.folderName}
                changeName={this.props.changeName}
                newFolder={this.props.addFolder} />;

        return (
            <div id="folder">
                {formDisplay}
                <div>
                    {folders}
                </div>
            </div>
        );
    };
};

let mapProps = (state) => {
    return {
        data: state.folder.data,
        folderName: state.folder.folderName,
        editFolder: state.folder.editFolder,
        isEdit: state.folder.isEdit,
        error: state.folder.error
    };
};

let mapDispatch = (dispatch) => {
    return {
        getFolders: bindActionCreators(getFolders, dispatch),
        changeName: bindActionCreators(changeName, dispatch),
        addFolder: bindActionCreators(newFolder, dispatch),
        updateFolder: bindActionCreators(updateFolder, dispatch),
        deleteFolder: bindActionCreators(deleteFolder, dispatch),
        changeEditFolder: bindActionCreators(changeEditFolder, dispatch),
        changeEditStatus: bindActionCreators(changeEditStatus, dispatch),
        getFiles: bindActionCreators(getFiles, dispatch)
    };
};

export default connect(mapProps, mapDispatch)(FoldersTree);