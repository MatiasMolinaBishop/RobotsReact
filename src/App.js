import './App.css';
import { robots } from './robots';
import CardList from './Components/CardList';
import SearchBar from './Components/SearchBar';
import { Component } from 'react'; 
import Scroll from './Components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots:robots,
      searchfield:"",
    }
  }

  onSearchChange = (event) => {

    this.setState({searchfield:event.target.value})
  
  }

  render (){
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    
    return(
      <div className="App">
      <h1>My Robots Army</h1>
      <SearchBar searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filterRobots}/>
      </Scroll>
    </div>
    )
  }
}

export default App;
