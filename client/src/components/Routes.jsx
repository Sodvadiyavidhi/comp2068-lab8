import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Login from './sessions/Login';
import Logout from './sessions/Logout';

import Blogs from './blogs/Index';
import NewBlog from './blogs/New';
import EditBlog from './blogs/Edit';

function Routes ({user, setUser}) {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" render={
        renderProps => <Login
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/logout" render={
        renderProps => <Logout
          {...renderProps}
          setUser={setUser}
        />
      }/>
      <Route exact path="/blogs" render={
        renderProps => <Blogs
          {...renderProps}
          user={user}
        />
      }/>
      <Route exact path="/blogs/new" component={NewBlog}/>
      <Route exact path="/blogs/edit" component={EditBlog}/>
    </Switch>
  );
}
export default Routes;