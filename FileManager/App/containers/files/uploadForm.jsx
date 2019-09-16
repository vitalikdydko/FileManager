import React from 'react';
import { post } from 'axios';
import queryString from 'query-string';

export default class UploadFileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
    }

    async submit(e) {
        e.preventDefault();
        const parsed = queryString.parse(location.search);
        const url = constants.file;
        const formData = new FormData();
        formData.append('body', this.state.file);
        formData.append('folderId', parsed['folderId']);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return post(url, formData, config).then(function (response) {
            window.location.reload();
        }.bind(this));
    }

    setFile(e) {
        this.setState({ file: e.target.files[0] });
    }

    render() {
        return (
            <form className="formStyle" onSubmit={e => this.submit(e)}>
                <h3>File Upload</h3>
                <input type="file" onChange={e => this.setFile(e)} />
                <button type="submit">Upload</button>
            </form>
        );
    }
}