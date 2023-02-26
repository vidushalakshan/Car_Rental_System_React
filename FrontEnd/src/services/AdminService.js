import axios from "../axios";

function AdminService () {
    postAdmin = async (data) => {
            console.log("form data :" +data)
            const promise =new Promise((resolve, reject) =>{
                axios.post('admin', data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: '+er);
                    return resolve(er)
                })
            })
            return await promise
    }
}

export default new AdminService();