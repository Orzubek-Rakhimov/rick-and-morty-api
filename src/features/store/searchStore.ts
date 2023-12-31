import { create } from "zustand";
import { Tselect } from "../../components/search/Search";
interface SearchState {
    selected: Tselect,
    setSelected: (selected: Tselect) => void,
    search: string,
    setSearch: (search: string) => void,
}

export const useSearchStore = create<SearchState>((set) => ({
    selected: "Character",
    setSelected: (selected) => set({ selected }),
    search: "",
    setSearch: (search) => set({ search }),
    
}));
