import React from 'react'
import menu from './json/menu.json'
import MenuList from "./components/MenuList"
import SelectList from "./components/SelectList"
import Timer from "./components/Timer"
import MoreMenu from "./components/MoreMenu"
 class App extends React.Component {
constructor(props){
  super(props);
  this.state={
menu:[],
selectMenu:{name:"White Tea", time:"120"},
show:false,
showMore:false,
  }
  this.getData=this.getData.bind(this)

  // this.input=React.createRef()

}
getData(){
  setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
         menu:menu,
      })
  }, 1000)
}
componentDidMount(){
  this.getData();
}
add(obj){
  console.log(obj);
  // let singleTodo={...this.state.singleTodo,...obj};
  let selectMenu={...this.state.selectMenu,...obj}
  this.setState({selectMenu})
  console.log(this.state.selectMenu);
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
startTimer(){
  this.setState({show:true})
}
showMore(){
  this.setState({showMore:!this.state.
    showMore})
}

  render() {
    // console.log(menu);
    return (
      <div className="app-container">
      <div className="container">
        <SelectList selectedData={this.state.selectMenu}/>
        {/* <Timer show={this.state.show} selectedData={this.state.selectMenu} /> */}
        {/* <Timer show={this.state.show} selectedData={this.state.selectMenu} /> */}
        <MenuList onAdd={this.add.bind(this)} list={this.state.menu}/>
        <button className="start-timer" onClick={this.startTimer.bind(this)} >Start Timer</button>
        <button className="start-timer" onClick={this.showMore.bind(this)} >See More</button>
        {/* <p>Cancel</p> */}
        {this.state.show && <Timer selectedData={this.state.selectMenu} />}
      </div>
      {this.state.showMore && <MoreMenu onAdd={this.add.bind(this)}  list={this.state.menu} />}

      </div>
    )
  }
}
export default App






















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
