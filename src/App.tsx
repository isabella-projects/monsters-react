import { useState, useEffect, ChangeEvent } from 'react';

import Background from './components/background/background.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/footer/footer.component';

import './App.css';

import { getData, type TMonster, type TResponse } from './utils/data.utils';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState<TMonster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData<TResponse>('https://dummyjson.com/users?limit=9');
                const users = response.data.users;
                setMonsters(users);
                setIsLoading(false);
            } catch (error) {
                console.error('Error while fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            const fullName = `${monster.firstName} ${monster.lastName}`;
            return fullName.toLocaleLowerCase().includes(searchField);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <Background />

            {isLoading ? (
                <div className="overlay">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <SearchBox
                        className="monsters-search-box"
                        name="search"
                        placeholder="Search monsters"
                        onChangeHandler={onSearchChange}
                    />
                    <CardList monsters={filteredMonsters} />
                </>
            )}
            <Footer />
        </div>
    );
};

export default App;
