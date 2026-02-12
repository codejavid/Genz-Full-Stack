
const KEY = "mindvault_data";

export function save(thoughts){
    localStorage.setItem(KEY, JSON.stringify(thoughts));
}

export function load(){
    return JSON.parse(localStorage.getItem(KEY))|| [];
}
