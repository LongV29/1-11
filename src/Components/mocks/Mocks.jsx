import { listUsers } from "../service/Services";

const getListUsers = new Promise((resolve, reject) => {
    resolve(listUsers)
})
// const getListUsers = () =>{
//     return new Promise((resolve, reject) => {
//         console.log(listUsers);
//         return resolve(listUsers)
//     })
// }
console.log(getListUsers)
export default getListUsers;