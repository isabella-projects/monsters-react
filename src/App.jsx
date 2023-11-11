import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import "./App.css";

/**
 * @version 1.0.0
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
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search monsters"
                    onChange={onSearchChange}
                />
                <CardList monsters={filteredResult} />
            </div>
        );
    }
}

export default App;
