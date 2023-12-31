import React from 'react'
import { Search as SearchIcon, X, ChevronDown } from 'lucide-react'
import './_search.scss'
import './_select.scss'
import useClickOutside from '../../hooks/useClickOutside';
import { useSearchStore } from '../../features/store/searchStore';
import { useQueryClient, useMutation } from '@tanstack/react-query';

export type Tselect = "Character" | "Location" | "Episode"

interface ISelect {
    selected: Tselect
    setSelect: (select: Tselect) => void

}

const options: Tselect[] = ["Character", "Location", "Episode"];

const Select = ({
    selected,
    setSelect
}: ISelect

) => {
    const [isOpened, setIsOpened] = React.useState<boolean>(false);
    const selectRef = useClickOutside(() => {
        setIsOpened(false);
    });
    const handleOptionClick = (option: Tselect) => {
        setSelect(option)
        setIsOpened(false)
    }

    const handleValueClick = () => {
        setIsOpened(!isOpened)
    }

    return (
        <div ref={selectRef} className="select">
            <div onClick={handleValueClick} className="select-value">
                <span>{selected}</span>
                <ChevronDown className='select-value-icon' size={24} />
            </div>

            {isOpened && <div className="select-options">
                {
                    options.map((option, index) => (
                        <div
                            key={index}
                            className="select-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            <span>{option}</span>
                        </div>
                    ))
                }
            </div>}
        </div>
    )

}




const Search = () => {
    const { selected, setSelected, search, setSearch } = useSearchStore();
    const [searchInputValue, setSearchInputValue] = React.useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(searchInputValue);
    }

    return (
        <div className="search-container">
            <Select selected={selected} setSelect={setSelected} />
            <form
                onSubmit={handleSubmit}
                className="search">
                <input value={searchInputValue} onChange={(e) => {
                    setSearchInputValue(e.target.value);
                }} type="search" name="search" placeholder="Search for a character , location , episode..." />
                <div className="search-icons">
                    {
                        search.length > 0 && <button onClick={() => setSearch('')} className='search-icon'>
                            <X size={24} />
                        </button>
                    }
                    <button type={'submit'} className='search-icon'>
                        <SearchIcon size={24} />
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Search