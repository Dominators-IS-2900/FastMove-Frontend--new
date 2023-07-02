import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** Make API Requests */


/** To get username from Token */
export async function getUsername(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token)
    return decode;
}

/** authenticate function */
export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate', { username })
    } catch (error) {
        return { error : "Username doesn't exist...!"}
    }
}

/** get User details */
export async function getUser({ username }){
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}



/** register user function */
export async function registerUser(credentials){
    
    try {
        const { data : { msg }, status } = await axios.post(`/api/register`, credentials);

        let { username, email } = credentials;

        /** send email */
        if(status === 201){
            await axios.post('/api/registerMail', { username, userEmail : email, text : msg})
        }

        console.log(msg);
        return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}

/** login function */
export async function verifyPassword({ username, password }){
    try {
        if(username){
            const { data } = await axios.post('/api/login', { username, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't Match...!"})
    }
}

/** update user profile function */
export async function updateUser(response){
    try {
        
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

/** generate OTP */
export async function generateOTP(username){
    try {
        const {data : { code }, status } = await axios.get('/api/generateOTP', { params : { username }});

        // send mail with the OTP
        if(status === 201){
            let { data : { email }} = await getUser({ username });
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { username, userEmail: email, text, subject : "Password Recovery OTP"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}
/**generate register oTP */

export async function generaterRegisterOTP(username,email)  {
    try {
        const {data : { code }, status } = await axios.get('/api/registerOTP',);

        // send mail with the OTP
        if(status === 201){
            // let { data : { email }} = await getUser({ username });
            let text = `Your OTP is ${code}. Please verify your Email.`;
            await axios.post('/api/registerMail', { username, userEmail: email, text, subject : "Email Verification code"})
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}
/** verify OTP */
export async function verifyOTP({ username, code }){
    try {
       const { data, status } = await axios.get('/api/verifyOTP', { params : { username, code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** verify register OTP */

export async function verifyRegisterOTP({ code }){
    try {
       const { data, status } = await axios.get('/api/verifyRegisterOTP', { params : { code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ username, password }){
    try {
        const { data, status } = await axios.put('/api/resetPassword', { username, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function checkEmail(userData){
    try {
        const { data : { msg }, status } = await axios.get(`/api/verifyuserEmail`,  { params : userData });
        console.log(status)
        //console.log({data});
        if(status === 201){
            
             return status;
        }else if(status===200){
              return status;
            }
    } catch (error) {
        return Promise.reject({ error })
    }
}




// import jwt_decode from 'jwt-decode';

// // import baseUrl from "../Apis/baseUrl";



// export function logoutUser(){
//   localStorage.removeItem('token');
// }

// /** To get username from Token */
// export async function getUsername(){
//   const token = localStorage.getItem('token')
//   if(!token) return Promise.reject("Cannot find Token");
//   let decode = jwt_decode(token)
//   return decode;
// }

// /**Authentication */
// export async function authenticate(username) {
//   try {
//     const result = await baseUrl.post('/authenticate', { username })
//     console.log(result)
//     return result;
// } catch (error) {
//   console.log(error);
//     return { error : error}
// }
// }

// /**Get user */
// export async function getUser({ username }) {
//   try {
//     const { data } = baseUrl.get(`/${username}`);
//     return { data };
//   } catch (error) {
//     return { error: "password doesn't matched...!" };
//   }
// }

// /**Register user */
// export async function registerUser(credentials) {


//   try {
//     const {
//       data: { msg },
//       status,
//     } = await baseUrl.post("/register", credentials);
//     let { username, email } = credentials;
//     console.log(username, email)

//     /* Send email */
//     if (status === 201) {
      
//     }
//     return Promise.resolve(msg);
//   } catch (error) {

//   }
// }

// export async function registerUserMail(credentials){
//   const {
//     data: { msg },
//     status,
//   } =await baseUrl.post("/sendMail", {
//     username:credentials.username,
//     userEmail: credentials.email,
//     text: "",
//   });
// }

// /**Login user */
// export async function verifyPassword({ username, password }) {
//   try {
//     if (username) {
//       const { data } = await baseUrl.post("/login", { username, password });
//       return Promise.resolve({ data });
//     }
//   } catch (error) {
//     return Promise.reject({ error: "Password doesn't Match...!" });
//   }
// }

// /** Generate OTP */

// export async function generateOTP(username) {
//   try {
//     const {
//       data: { code },
//       status,
//     } = await baseUrl.get("/generateOTP", { params: { username } });

//     //Send mail with OTP
//     if (status === 201) {
//       let {
//         data: { email },
//       } = await getUser({ username });
//       let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
//       await baseUrl.post("/registerMail", {
//         username,
//         userEmail: email,
//         text: text,
//         subject : "Password Recovery OTP"
//       });
//     }
//     return Promise.resolve(code);

//   } catch (error) {
//     return Promise.reject({ error });
//   }
// }
