import { Todos } from "../domain/task";

const endpoint="https://myapi.com/";

export function getAllTodos():Promise<Todos>{
    return fetch(endpoint).then(async(res)=>{
        const data= await res.json();
        if(!res.ok){
            //200番台以外のレスポンスの時
            throw data;
        }
        return data;
    })
}