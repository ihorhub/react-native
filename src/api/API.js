import axios from 'axios'
let axiosInstance=axios.create({baseURL:'https://jsonplaceholder.typicode.com '})
const getUsers=async()=>{
    let {data}=await axiosInstance('/users')
    return data
}
const getUserById=async(id)=>{
   let {data}= await axiosInstance(`/users/${id}`)
   return data
}
export {getUsers,getUserById}