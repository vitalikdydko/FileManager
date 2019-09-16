import { GET_FOLDERS_SUCCESS, GET_FOLDERS_ERROR, PUT_FOLDER_SUCCESS, PUT_FOLDER_ERROR, POST_FOLDER_SUCCESS, POST_FOLDER_ERROR, CHANGE_FOLDER_NAME, IS_EDIT_FOLDER, EDIT_FOLDER } from './folderConstants.jsx';

const initialState = {
    data: { folderList: [] },
    folderName: '',
    editFolder: null,
    isEdit: false,
    error: ''
};

export default function folder(state = initialState, action) {
    switch (action.type) {
        case GET_FOLDERS_SUCCESS:
            return { ...state, data: action.payload, error: '' };

        case GET_FOLDERS_ERROR:
            return { ...state, error: action.payload };

        case PUT_FOLDER_SUCCESS:
            return { ...state, folderName: '', error: '' };

        case PUT_FOLDER_ERROR:
            return { ...state, error: action.payload };

        case POST_FOLDER_SUCCESS:
            return { ...state, folderName: '', isEdit: false, editFolder: null, error: '' };

        case POST_FOLDER_ERROR:
            return { ...state, error: action.payload };

        case CHANGE_FOLDER_NAME:
            return { ...state, folderName: action.payload, error: '' };

        case IS_EDIT_FOLDER:
            return { ...state, isEdit: action.payload, error: '' };

        case EDIT_FOLDER:
            return { ...state, editFolder: action.payload, error: '' };

        default:
            return state;
    }
}