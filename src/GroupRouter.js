import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import NavigationGroup from './NavigationGroup';
import NavigationGroup2 from './NavigationGroup2';
import GroupSetting from './GroupSetting';
import GroupTimeLinePage from './GroupTimeLinePage';
import MainCalendar from './MainCalendar';
import GroupHeaderImg from './GroupHeaderImg';
import GroupRepositoryListPage from './GroupRepositoryListPage';
import GroupRepositoryWritePage from './GroupRepositoryWritePage';
import GroupRepositoryPage from './GroupRepositoryPage';

{/*Group Navigation 사용하는 그룹 관련 페이지 - 그룹 타임라인, 그룹 관리*/}
const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}
class GroupRouter extends Component {
  constructor(){
    super(...arguments);
    this.state={
      groupInfo:'',
      reqList:'',
      joinList:''
    }
  }
  

  // 탈퇴 시, navigation2 멤버목록 동기화
  changejoinList(joinlist) {
    this.setState({
      joinList: joinlist
    })
  }

  // 그룹 정보 수정 시, navigation 동기화
  changegroupInfo(groupTitle, groupIntro, imgurl, groupno){
    fetch(`${API_URL}/gitbook/group/infoupdate`, {
        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify({
          groupTitle: groupTitle,
          groupIntro: groupIntro,
          imgurl: imgurl,
          groupno: groupno,
          userno: sessionStorage.getItem("authUserNo")
        })
    })
    .then(response => response.json())
    .then( json => {
          this.setState({
            groupInfo: json.data
      });
    })
    .catch(err => console.log(err));    
  }

  render() {
    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Group"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <NavigationGroup groupinfo={this.state.groupInfo}></NavigationGroup>  {/** 네비게이션 */}
                
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>             
                  <GroupHeaderImg groupinfo={this.state.groupInfo}></GroupHeaderImg>

                  <Route  path="/gitbook/group/:groupno?/:userno?" exact component={GroupTimeLinePage }/>
                  <Route  path="/gitbook/group/:groupno?/:userno?/setting" exact render={() => <GroupSetting 
                                                                                                  userno={this.props.match.params.userno}
                                                                                                  groupno={this.props.match.params.groupno}
                                                                                                  changeInfo={this.changegroupInfo.bind(this)}
                                                                                                  changeList={this.changejoinList.bind(this)}
                                                                                                />}/>
                  {/* <Route  path="/gitbook/group/repository" exact component={GroupRepositoryListPage}/>
                  <Route  path="/gitbook/group/repository/detail" exact component={GroupRepositoryPage}/>
                  <Route  path="/gitbook/group/repository/write" exact component={GroupRepositoryWritePage}/>
                  <Route  path="/gitbook/group/schedule"  exact component={MainCalendar} onModal={(open)=> this.setState(open)} onDayClick={(day) => this.setState({ day })}/> */}

                  </div>
              
                  {/** 세번째 섹션 */}
                  <NavigationGroup2 joinlist={this.state.joinList}></NavigationGroup2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

  componentDidMount() {
    fetch(`${API_URL}/gitbook/group/info`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify({
          userno : this.props.match.params.userno,
          groupno: this.props.match.params.groupno
      })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
        groupInfo: json.data    
        });
    })
    .catch( err => console.error( err ));  

    fetch(`${API_URL}/gitbook/group/joinlist`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify({
          groupno: this.props.match.params.groupno
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
        joinList: json.data    
        });
    })
    .catch( err => console.error( err ));   
  }
 }

export default GroupRouter;