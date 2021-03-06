import React, { Component } from "react";
import {Link} from "react-router-dom";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';


class GroupListJoinItem extends Component {
    render() {
        return(   
         <div>
            <ul className="group-list">
                <li>
                    <div className="media"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <Link to="/gitbook/group"><p><h4><b>CodingVirus19</b></h4></p></Link>
                                <h5>with 준영, 동은, 예은, 상훈</h5>
                            </div> 
                    </div>
                </li>
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <Link to=""><p><h4><b>CodeForest</b></h4></p></Link>
                                <h5>with 유진, 관우, 지술, 태성</h5>
                            </div> 
                    </div>
                </li>    
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <Link to=""><p><h4><b>AlwaysWithMe</b></h4></p></Link>
                                <h5>with 길행, 우경, 인효, 해용</h5>
                            </div> 
                    </div>
                </li>      
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <Link to=""><p><h4><b>DouzoneMania</b></h4></p></Link>
                                <h5>with 준영, 은엽, 정은, 태영</h5>
                            </div> 
                    </div>
                </li> 
            </ul>
        </div>
        );
    }
}

export default GroupListJoinItem;