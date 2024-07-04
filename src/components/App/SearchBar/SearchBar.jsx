import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
    
    const handleSubmit = event => {
        event.preventDefault();
        const topic = event.target.elements.topic.value;
       onSubmit(topic)
        event.target.reset();

    }

    return <header>
        <form onSubmit={handleSubmit}>
    <input
      type="text"
    //   autocomplete="off"
    //   autofocus
                placeholder="Search images and photos"
                name="topic"
    />
            <button className={css.searchButton} type="submit"><IoIosSearch size={20}/></button>
  </form>
</header>
}