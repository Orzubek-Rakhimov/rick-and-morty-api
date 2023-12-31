import React from 'react'
import { useSearchStore } from '../../features/store/searchStore';
import { useQuery } from '@tanstack/react-query';

const SearchResults = () => {
    const { selected, search } = useSearchStore();
    const searchQuery = useQuery({
        queryKey: ['search', selected, { name: search }],
        queryFn: () => fetch(`https://rickandmortyapi.com/api/${selected.toLowerCase()}/?name=${search}`).then(res => res.json()),
        enabled: !!search,
    })
    return (
        <div>
            {searchQuery.isLoading && <div>Loading...</div>}
            {searchQuery.isError && <div>{searchQuery.error.message}</div>}
            {searchQuery.isSuccess && <div>
                {searchQuery.data.results && searchQuery.data.results.map((result: any) => {
                    return (
                        <div key={result.id}>
                            <h1>{result.name}</h1>
                            <p>{result.type}</p>
                            <p>{result.dimension}</p>
                        </div>
                    )
                })}
            </div>}

            {
                searchQuery.data?.error && <div>{searchQuery.data.error}</div>
            }
        </div>
    )
}

export default SearchResults