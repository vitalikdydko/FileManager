import { GET_FILES_SUCCESS, GET_FILES_ERROR} from './fileConstants.jsx';

const initialState = {
    data: { fileList: [] },
    error: ''
};

export default function file(state = initialState, action) {
    switch (action.type) {
        case GET_FILES_SUCCESS:
            return { ...state, data: action.payload, error: '' };

        case GET_FILES_ERROR:
            return { ...state, error: action.payload };

        //case PUT_FOLDER_SUCCESS:
        //    return { ...state, folderName: '', error: '' };

        //case PUT_FOLDER_ERROR:
        //    return { ...state, error: action.payload };

        //case POST_FOLDER_SUCCESS:
        //    return { ...state, folderName: '', isEdit: false, editFolder: null, error: '' };

        //case POST_FOLDER_ERROR:
        //    return { ...state, error: action.payload };

        //case CHANGE_FOLDER_NAME:
        //    return { ...state, folderName: action.payload, error: '' };

        //case IS_EDIT_FOLDER:
        //    return { ...state, isEdit: action.payload, error: '' };

        //case EDIT_FOLDER:
        //    return { ...state, editFolder: action.payload, error: '' };

        default:
            return state;
    }
}