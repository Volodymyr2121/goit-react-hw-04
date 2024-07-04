import SearchBar from "./SearchBar/SearchBar";



export default function App() {

    const handleSearch = (topic) => {
        console.log(topic)
    }


    return (<div>
        <SearchBar onSubmit={handleSearch} />
        </div>
    )
}