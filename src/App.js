import { Component } from "react";
import "./App.css";
import { CardList } from "./Component/Card/CardList";
import { Search } from "./Component/Search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((users) => {
        this.setState({ monster: users });
      });
    });
  }
  render() {
    const { monster, searchText } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
    return (
      <div className="App">
        {/* <input
          onChange={}
          type="search"
          placeholder="Search here"
        /> */}
        <h1>Monster</h1>
        <Search
          handleChange={(e) => {
            this.setState({ searchText: e.target.value });
          }}
          placeholder="Search Monster"
        />
        <CardList monster={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
