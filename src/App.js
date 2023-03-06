import React, {useState, useEffect} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/search-box.component';

const App = () =>{
  const [searchMonster, setSearchMonster] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const users = await response.json();
            console.log(users);
            setMonsters(users);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  },[]);

  const handleChange = (e) => {
    setSearchMonster(e.target.value);
  }

  const filterMonster = () => {
   return monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLocaleLowerCase()))
  }

  return (
    <div className="App">
      <h1>Monster Roledex</h1>
      <SearchBox placeholder={'search monsters'} handleChange={handleChange} />
      <CardList monsters={monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLocaleLowerCase()))}/>

    </div>
  );
}

export default App;
