import { useState, useEffect } from "react";

import Background from "./components/background/background.component";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Footer from "./components/footer/footer.component";

import "./App.css";
import axios from "axios";

/**
 * - Monster Cards Application in ReactJS
 * @author isabella-projects
 * @version 1.1.5
 */

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    "https://hub.dummyapis.com/employee?noofRecords=9&idStarts=1001"
                );
                const users = await res.data;

                setMonsters(users);
            } catch (error) {
                console.error("Error while fetching data:", error);
            }
        })();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            const fullName = `${monster.firstName} ${monster.lastName}`;
            return fullName.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <Background />
            <SearchBox
                className="monsters-search-box"
                name="search"
                placeholder="Search monsters"
                onChangeHandler={onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
            <Footer />
        </div>
    );
};

export default App;
