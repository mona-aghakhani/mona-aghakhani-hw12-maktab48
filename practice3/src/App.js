import React from 'react'
import menu from './json/menu.json'
import MenuList from "./components/MenuList"
import SelectList from "./components/SelectList"
// import Timer from "./components/Timer"
import MoreMenu from "./components/MoreMenu"
 class App extends React.Component {
constructor(props){
  super(props);
  this.state={
menu:[],
time: "",
 seconds: 120,
selectMenu:{name:"White Tea",time:120},
show:false,
showMore:false,
  }
  this.getData=this.getData.bind(this)
  this.timer = 0;
  this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  // this.input=React.createRef()

}
getData(){
  setTimeout(() => {
      // console.log('Our data is fetched');
      this.setState({
         menu:menu,
      })
  }, 1000)
}
componentDidMount(){
  this.getData();
  // this.timeLeftVar = this.secondsToTime(this.state.seconds);
  // console.log(timeLeftVar );
  // this.setState({ time: this.timeLeftVar });
  // console.log(this.state.time);
}

secondsToTime(secs){
  let minutes=Math.floor(secs/60)
  let seconds=secs %60;
  let result =`${minutes}:${seconds > 9? seconds: '0'+seconds}`
  return result
  // return `${minutes}:${seconds}`
}
startTimer() {
  console.log(this.timer);
console.log(this.state.selectMenu.time);
  // && this.state.selectMenu.time > 0
  if (this.timer === 0 ) {
    // this.timer=  this.countDown(this.state.selectMenu.time)
    // console.log(this.timer);
    this.timer=  this.countDown(this.state.selectMenu.time)
    console.log(this.timer);
    console.log(this.state.time);
    // this.timer = setInterval(this.countDown, 1000);
  }
}
countDown(secs) {
  // if (this.state.selectMenu.time >= 0) {
  //   this.setState(prevState=>( {

  //   }
  //   ))
  // }
  // let se
//   console.log(this.timer);
//   // console.log(22222);
this.interval=setInterval(()=> {  
  
   secs = secs - 1;
  // console.log(secs);

  this.setState({
    time: this.secondsToTime(secs),
   
  });
  console.log(this.state.time);
  console.log(this.state.time.length);
  // secondsToTime(this.state.selectMenu.time)
  // console.log(secs);

  // console.log(this.state.time);
  if (secs === 0) { 
    // console.log(secs);
    clearInterval(this.interval);
    this.timer=0
  }
  // Check if we're at zero.
  },1000)
  return secs
  //Remove one second, set state so a re-render happens.
  // console.log(this.state.time);
  // console.log(secs);
  // if (this.state.time === '0') { 
  //   console.log(secs);
  //   clearInterval(this.interval);
  // }
}
add(obj,objTime){
  // console.log(obj);
  // let singleTodo={...this.state.singleTodo,...obj};
  // let selectMenu={...this.state.selectMenu,...obj}
  let seconds=objTime;
  // console.log(newSec);
  // this.setState({seconds:newSec})
  // console.log(this.state.seconds);
  // let time = this.secondsToTime(this.state.seconds);

  // this.setState({selectMenu, seconds:objTime})
  // this.timeLeftVar = this.secondsToTime(this.state.seconds);
  // console.log(this.timeLeftVar );
  this.setState({selectMenu:obj ,time: ""});
  // console.log(this.state.selectMenu);
  // console.log(this.state.time);
  // this.setState({time:s})
  // console.log(this.state.seconds);
  // console.log(this.state.selectMenu);
  // let menu=[...this.state.menu]
  // let filterMenu=menu.filter(item => item.id === menuId)
// let filterMenu=(this.state.menu).filter(item =>item.id )
// console.log(filterMenu);
// let selectMenu=this.state.selectMenu.concat(filterMenu)
// let selectMenu=[...this.state.selectMenu,...filterMenu]
// console.log(selectMenu);
// this.setState({selectMenu:selectMenu})
// console.log(this.state.selectMenu);
}
// componentDidUpdate(prevProps, prevState, snapshot){
//   // console.log(prevProps)
//   console.log(prevState);
//   // if (prevProps.todo.length>0 && JSON.stringify(prevProps.todo)!==JSON.stringify(this.props.todo)){
//   if ( JSON.stringify(prevState.selectMenu)!==JSON.stringify(prevState.selectMenu)){
//       // console.log('here')
//       this.timeLeftVar = this.secondsToTime(this.state.seconds);

//       // this.setState({selectMenu, seconds:objTime})
//       // this.timeLeftVar = this.secondsToTime(this.state.seconds);
//       console.log(this.timeLeftVar );
//       this.setState({ time: this.timeLeftVar });
//       console.log(this.state.time);
//       // this.setState({word:`it is changed right now ${this.state.seconds}`})
//   }
// }
// startTimer(){
//   this.setState({show:true})
// }
showMore(){
  this.setState({showMore:!this.state.
    showMore})
}

  render() {
    // console.log(menu);
    return (
      <div className="app-container">
      <div className="container">
        <SelectList time={this.state.time} secondsToTime={this.secondsToTime.bind(this)} selectedData={this.state.selectMenu}/>
        {/* <h1 className="timer">{this.state.time.m} : {this.state.time.s} left </h1> */}
        {/* <Timer show={this.state.show} selectedData={this.state.selectMenu} /> */}
        {/* <Timer show={this.state.show} selectedData={this.state.selectMenu} /> */}
        <MenuList onAdd={this.add.bind(this)} secondsToTime={this.secondsToTime.bind(this)} list={this.state.menu}/>
        <button className="start-timer" onClick={this.startTimer} >Start Timer</button>
        <button className="start-timer" onClick={this.showMore.bind(this)} >See More</button>
        {/* <p>Cancel</p> */}
        {/* {this.state.show && <Timer selectedData={this.state.selectMenu} />} */}
      </div>
      {this.state.showMore && <MoreMenu onAdd={this.add.bind(this)}  list={this.state.menu} />}

      </div>
    )
  }
}
export default App
// halat ghabli
// startTimer() {
//   if (this.timer === 0 && this.state.selectMenu.time > 0) {
//     this.timer=  this.countDown(this.state.selectMenu.time)
//     console.log(this.timer);
//     // this.timer = setInterval(()=> this.countDown(this.state.selectMenu.time), 1000);
//   }
// }
// countDown(secs) {
//   console.log(this.timer);
//   // console.log(22222);
// this.interval=setInterval(()=> {  
  
//    secs = secs - 1;
//   // console.log(secs);

//   this.setState({
//     time: this.secondsToTime(secs),
   
//   });
//   // console.log(this.state.time);
//   // secondsToTime(this.state.selectMenu.time)
//   console.log(secs);

//   console.log(this.state.time);
//   if (this.state.time === '0') { 
//     console.log(secs);
//     clearInterval(this.interval);
//   }
//   // Check if we're at zero.
//   },1000)
//   // Remove one second, set state so a re-render happens.
//   // console.log(this.state.time);
//   // console.log(secs);
//   // if (this.state.time === '0') { 
//   //   console.log(secs);
//   //   clearInterval(this.interval);
//   // }
// }



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
