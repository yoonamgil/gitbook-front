import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';
import "./DialogDelete.css"


class FriendListJoinItem extends Component {
    constructor() {
		super(...arguments);
		this.state = {
            show: "none"
        };
    }
    
    onShow() {
        this.setState({
			show: "block",
        });
    }
      
	onClose() {
		this.setState({
          show: "none"
	    });
    }

    onOkhandler(){
        this.props.callback.delete(this.props.no);
        this.setState({
            show: "none"
        }) 
    }

    render() {
        return(   
         <div>
                <li>
                    <div className="media"> 
                        <img src={this.props.img} alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <Link to={`/gitbook/my/${this.props.id}`}><p><h4><b>{this.props.nickname}</b></h4></p></Link>
                                <h5>{this.props.name} ({this.props.id})</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger" onClick={this.onShow.bind(this)}>삭제</a>
                                </div>
                                <div>                                 
                                </div>
                                <div className="modal" style={{display: this.state.show}}>
                                    <div className="modal-content" style={{margin:"15% auto",height:"130px" ,width:"300px"}}>
                                        <div className="modal-header" style={{backgroundColor:"#0FC19E"}}>
                                            <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                                            <h6 style={{color:"#ffff"}}>삭제 알림</h6>
                                        </div>      
                                        <div className="modal-footer">
                                            <h6 style={{color:"gray",position:"absolute",marginLeft:"10px"}}>친구를 정말 삭제 하시겠습니까?</h6>            
                                            <button 
                                                style={{width:"70px",marginTop:"30px"}}
                                                type="submit"
                                                className="kafe-btn kafe-btn-mint-small" name="button-ok"
                                                onClick={this.onOkhandler.bind(this)}>
                                                ok
                                            </button>
                                        </div>
                                    </div>
                                </div>  
                            </div> 
                    </div>
                </li>
        </div>
        );
    }

}

export default FriendListJoinItem;