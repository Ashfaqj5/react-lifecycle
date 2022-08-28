import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:'vk',
      roll:1
    };
    this.buttonClicked=this.buttonClicked.bind(this);
  }

  static getDerivedStateFromProps(props,state){
    console.log("in getderivedstatefromprops method",props,state);
    console.log("------------------------------------");
    return null;
  }

  componentDidMount(){
    console.log("in componentDidMount method");
    console.log("------------------------------------"); 
  }

  shouldComponentUpdate(nextprops,nextstate){
    console.log("in shouldComponentUpdate method",nextprops,nextstate);
    console.log("------------------------------------");
    return true;
  }

  getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log("in getSnapshotBeforeUpdate method",prevprops,prevstate);
    console.log("------------------------------------");
    return null;
  }

  componentDidUpdate(prevprops,prevstate,snapshot){
    console.log("in componentDidUpdate method",prevprops,prevstate,snapshot);
    console.log("------------------------------------");
  }
  buttonClicked(){
    console.log("========== button clicked ===========");
    let r=this.state.roll + 1;
    this.setState({roll:r});
  }
  render(){
    console.log("in render method,",this.state.name,this.state.roll);
    console.log("------------------------------------");
    let nm=this.state.name;
    let rl=this.state.roll;
    return <div>
              <h1>React LifeCycle</h1>
              <h2>name : {nm}</h2>
              <h2>roll : {rl}</h2>
              <button onClick={this.buttonClicked}>click to change roll no.</button>
            </div>
  }
}

export default App;
