import { GET_FOLDERS_SUCCESS, GET_FOLDERS_ERROR, PUT_FOLDER_SUCCESS, PUT_FOLDER_ERROR, POST_FOLDER_SUCCESS, POST_FOLDER_ERROR, CHANGE_FOLDER_NAME, IS_EDIT_FOLDER, EDIT_FOLDER } from './folderConstants.jsx';
import "isomorphic-fetch";

export function receiveFolders(data) {
    return {
        type: GET_FOLDERS_SUCCESS,
        payload: data
    };
}

export function errorReceive(err) {
    return {
        type: GET_FOLDERS_ERROR,
        payload: err
    };
}

export function changeName(name) {
    return {
        type: CHANGE_FOLDER_NAME,
        payload: name
    };
}

export function changeEditFolder(folder) {
    return {
        type: EDIT_FOLDER,
        payload: folder
    };
}

export function changeEditStatus(status) {
    return {
        type: IS_EDIT_FOLDER,
        payload: status
    };
}

export function getFolders() {
    return (dispatch) => {
        fetch(constants.folder)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch(receiveFolders(data));
            }).catch((ex) => {
                dispatch(errorReceive(ex));
            });
    };
}

export function newFolder(name) {
    return (dispatch) => {
        if (name) {
            fetch(window.constants.folder,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: name })
                }).then((response) => {
                    if (response.ok) {
                        dispatch({ type: PUT_FOLDER_SUCCESS });
                        getFolders()(dispatch);
                    } else {
                        alert('An error occurred add folder.');
                        dispatch({ type: PUT_FOLDER_ERROR, payload: 'An error occurred add folder.' });
                    }
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: PUT_FOLDER_ERROR, payload: ex });
                });
        } else {
            alert('You must fill in the folder name.');
            dispatch({ type: PUT_FOLDER_ERROR, payload: 'An error occurred add folder.' });
        }
    };
}

export function updateFolder(folderId, name) {
    return (dispatch) => {
        if (name) {
            fetch(window.constants.folder,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ folderId: folderId, name: name })
                }).then((response) => {
                    if (response.ok) {
                        dispatch({ type: POST_FOLDER_SUCCESS });
                        getFolders()(dispatch);
                    } else {
                        alert('An error occurred update folder.');
                        dispatch({ type: POST_FOLDER_ERROR, payload: 'An error occurred update folder.' });
                    }
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: POST_FOLDER_ERROR, payload: ex });
                });
        } else {
            alert('You must fill in the folder name.');
            dispatch({ type: POST_FOLDER_ERROR, payload: 'An error occurred update folder.' });
        }
    };
}

export function deleteFolder(folderId) {
    return (dispatch) => {
        fetch(window.constants.folder + '?folderId=' + folderId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                getFolders()(dispatch);
            } else {
                alert('An error occurred remove folder.');
            }
        }).catch((ex) => {
            alert(ex);
        });
    };
}