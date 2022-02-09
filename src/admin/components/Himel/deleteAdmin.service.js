import axios from "axios";
/** Loging in for authorization */
async function handleLogin(data) {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/login",
            data,
            { withCredentials: true }
        );
        localStorage.setItem("access_token", response.data.access_token);
        console.log(response);
        console.log("loged in ");
    } catch (error) {
        console.log(error);
        console.log("In login Error happened but works");
    }
}


async function DeleteAdmin(userId)  {
    try{
        console.log(userId);
        handleLogin();
        const response = await axios.delete(`http://localhost:5000/api/users/${userId}` , { withCredentials: true });
         console.log("delete response ", response);
        console.log(`User ${userId} deleted`);
        
        // const remainingPost = posts.filter(post => post.id!=postId);  
        // setPosts(remainingPost);
    }
    catch(error){
        console.log(error);
    }
}
 
export default DeleteAdmin;