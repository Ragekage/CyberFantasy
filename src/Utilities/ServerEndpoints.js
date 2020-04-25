const axios = require('axios')
// axios.defaults.baseURL = 'https://cybersunset-api.herokuapp.com';
// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
export const callBackendAPI = async () => {
const response = await fetch('/dbtest');
const body = await response.json();
console.log(response)
console.log(body)
if (response.status !== 200) {
throw Error(body.message) 
}
return body;
}

export async function createUser(postData){
var response = axios.post('/createuser', {
   postData
  })
  .then(function (response) {
    console.log(response);
    return response.result
  })
  .catch(function (error) {
    console.log(error);
    return response.result
  });

  return response
}

export async function confirmCheck(confirmId){
  var response = axios.post('/confirmcheck', {
    confirmId
  }).then(response => {
    console.log(response)
    return response
  })
  .catch(error => {
    console.log(error)
  })
return response
}

export async function emailUserCheck(postData){
 var response = axios.post('/EmailUserCheck', {
     postData
    })
    .then(response => {
      console.log(response);
      return response.data
    })
    .catch(error => {
      console.log(error);
      return error
    });

    return response
  }

export async function checkUser(userData) {
var response = await axios.post('/checkuser', {
   userData
  }).then(response => {
        console.log(response);

        return response.data;
   
    })
    .catch(error => {
      console.log(error);

       return error
    });

return response
}