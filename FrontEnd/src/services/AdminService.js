import axios from "../axios";

class AdminService {
    postAdmin = async (data)  => {
        const promise = new Promise((resolve, reject) => {
            axios.post('admin', data) 
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }
};

export default new AdminService();