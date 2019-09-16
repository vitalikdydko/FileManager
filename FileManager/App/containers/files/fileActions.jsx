import { GET_FILES_SUCCESS, GET_FILES_ERROR, POST_FILE_SUCCESS, POST_FILE_ERROR, CHANGE_FILE_NAME, EDIT_FILE } from './fileConstants.jsx';
import "isomorphic-fetch";

export function receiveFiles(data) {
    return {
        type: GET_FILES_SUCCESS,
        payload: data
    };
}

export function errorReceive(err) {
    return {
        type: GET_FILES_ERROR,
        payload: err
    };
}

export function changeName(name) {
    return {
        type: CHANGE_FILE_NAME,
        payload: name
    };
}

export function changeEditFile(file) {
    return {
        type: EDIT_FILE,
        payload: file
    };
}

export function getFiles(folderId) {
    return (dispatch) => {
        fetch(constants.file + '?folderId=' + folderId)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch({ type: GET_FILES_SUCCESS, payload: data });
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: GET_FILES_ERROR, payload: ex });
            });
    };
}

export function updateFile(fileId, name, folderId) {
    return (dispatch) => {
        if (name) {
            fetch(window.constants.file,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ fileId: fileId, name: name, folderId: folderId })
                }).then((response) => {
                    if (response.ok) {
                        dispatch({ type: POST_FILE_SUCCESS });
                        getFolders()(dispatch);
                    } else {
                        alert('An error occurred update file.');
                        dispatch({ type: POST_FILE_ERROR, payload: 'An error occurred update file.' });
                    }
                }).catch((ex) => {
                    alert(ex);
                    dispatch({ type: POST_FILE_ERROR, payload: ex });
                });
        } else {
            alert('You must fill in the file name.');
            dispatch({ type: POST_FILE_ERROR, payload: 'An error occurred update file.' });
        }
    };
}

export function deleteFile(fileId, folderId) {
    return (dispatch) => {
        fetch(window.constants.file + '?fileId=' + fileId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                getFiles(folderId)(dispatch);
            } else {
                alert('An error occurred remove file.');
            }
        }).catch((ex) => {
            alert(ex);
        });
    };
}


