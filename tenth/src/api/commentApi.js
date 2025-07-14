
 export const getComments = async()=>{
     const res  = await fetch('https://jsonplaceholder.typicode.com/comments',{
        method:'GET'
    });
    return await res.json()
}
