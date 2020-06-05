import React, { Component } from "react";

import FriendListRequest from "./FriendListRequest";
import FriendListJoin from "./FriendListJoin";


class FriendList extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: ''
        }
        console.log('EmailistApp:constructor()');
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }

    render() {
        return(   
         <div>
            <FriendListRequest 
                callback={this.props.callback} 
                userinfo={this.props.reqinfo}
                keyword={this.state.keyword}
                onNotifyKeywordChange={this.onNotifyKeywordChange.bind(this)}/>
            <hr/>
            <FriendListJoin 
                callback={this.props.callback} 
                userinfo={this.props.friendinfo}
                keyword={this.state.keyword}
                onNotifyKeywordChange={this.onNotifyKeywordChange.bind(this)}/>
        </div>
       );
    }
    
}

export default FriendList;