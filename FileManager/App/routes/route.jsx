import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import FolderTree from '../containers/folders/foldersTree.jsx';
import FileTree from '../containers/files/filesTree.jsx';

export default class Routing extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route path="/folders/files" component={FileTree} />
                    <Route path="/folders" component={FolderTree} />
                    <Route exact path="/" render={() => (<Redirect to="/folders" />)} />
                </Switch>
            </main>
        );
    }
};