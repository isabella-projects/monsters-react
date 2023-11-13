import { Component } from "react";

import Background from "./components/background/background.component";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

/**
 * - Monster Cards Application in ReactJS
 * @author isabella-projects
 * @version 1.1.5
 */

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await res.json();

            this.setState(() => {
                return { monsters: users };
            });
        } catch (error) {
            console.error("Error while fetching data:", error);
        }
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return { searchField };
        });
    };

    render() {
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredResult = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <h1 className="app-title">Monster Rolodex</h1>
                <Background />
                <SearchBox
                    className="search-box"
                    name="search"
                    placeholder="Search monsters"
                    onChangeHandler={onSearchChange}
                />
                <CardList monsters={filteredResult} />
                <Footer />
            </div>
        );
    }
}

export default App;
