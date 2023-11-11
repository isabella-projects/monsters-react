import { Component } from "react";

import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: "",
        };
        console.log("constructor");
    }

    async componentDidMount() {
        console.log("componentDidMount");
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await res.json();

            this.setState(
                () => {
                    return { monsters: users };
                },
                () => {
                    console.log(this.state);
                }
            );
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
                {filteredResult.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
