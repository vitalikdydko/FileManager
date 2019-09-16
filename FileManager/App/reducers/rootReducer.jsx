import { combineReducers } from 'redux';
import folder from '../containers/folders/folderReducer.jsx';
import file from '../containers/files/fileReducer.jsx';

export default combineReducers({
    folder,
    file
});