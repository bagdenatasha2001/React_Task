 export const getPost = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'Get'
    });
    return  await response.json()
}



