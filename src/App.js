import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';


class App extends Component {

  render() {
    
   
    return (
      <div className="App" >
        <Route path="/gitbook/main" component={MainRouter}></Route>
        <Route path="/gitbook/my/:userid?" component={MyRouter}></Route>
        <Route path="/gitbook/mygroup" component={MyGroupRouter}></Route>
        <Route path="/gitbook/myfriend" component={MyFriendRouter}></Route>
        <Route path="/gitbook/group" component={GroupRouter}></Route>     
      </div>
    );
  }
}

export default App;
