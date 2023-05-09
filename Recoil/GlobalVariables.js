import { atom, selector } from "recoil";

export const userData = atom({
    key:'userData',
    default:[],
});

export const hospitalData = atom({
    key:'hospitalData',
    default:[],
});

export const allHospitalData = atom({
    key:'allHospitalData',
    default:[],
});

export const SearchInput = atom({
    key:'SearchInput',
    default:'',
});

export const DataHeadingFoodCatogery = selector({
    key:'DataHeadingFoodCatogery',
    get:({get})=>{
        const dataHeading = get(allHospitalData)
        const dataHeadingArray = []
        dataHeading.forEach((item)=>{
            dataHeadingArray.push(item.cityName)
        });
        return dataHeadingArray;
    }
});

export const FilterSearchItemsSelector = selector({
    key:'FilterSearchItemsSelector',
    get:({get})=>{
        const itemList = get(DataHeadingFoodCatogery);
        const filterString = get(SearchInput);
    
        // Filter the item list based on the filter string
        return itemList.filter(item => item.includes(filterString));
    
    }
});
