
let urlAPI= "https://manejo-equipos-api.herokuapp.com/"

async function Fetch(myRequest, action) {
  //Mejorar el sistema de mensajes de error
  console.log("fetch: ", myRequest, action)
    await fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data fetch:', data);
        console.log("function:", action)
        return typeof action == 'function' &&  action(data);
        })
      .catch((e) => console.log({ Status: 'ERROR_FETCH', message:"Error en el proceso", text: e }));
  

}

function createPostRequest(url, token, body, action){
   /**User routes */
   const urlUse = `${urlAPI}api/v1/${url}`;


   // arreglar fallas en envios
   const myInitPost = {
     method: "POST",
     body: JSON.stringify(body),
     headers: {
       'Content-Type': 'application/json',
       token,
     },
    }

   //Configuracion de request
   let myRequest = new Request(urlUse, myInitPost);

   Fetch(myRequest, action)

}

//revisar si los dos son el mismo proceso, y si se puede achicar
function createGetRequest(url, token, action){

  const urlUse = `${urlAPI}api/v1/${url}`;
  const myInitGet = {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    token,
    },
  };

  let myRequest = new Request(urlUse, myInitGet);
 
  Fetch(myRequest, action)
}


function authRequest(token){

  const urlUse = `${urlAPI}api/v1/authToken`;
  const myInitGet = {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    token,
    },
  };

  let myRequest = new Request(urlUse, myInitGet);
 
  return Fetch(myRequest, (data)=>{
    if(data.status=="OK"){
      localStorage.setItem("token", data.data.token)
      return true
    }
    else{
      return false
    }
  })
}


function requestLoginRegister(url, body, action){

  const urlUse = `${urlAPI}api/v1/${url}`;
  const myInitGet = {
  method: "POST",
  body: JSON.stringify(body) ,
  headers: {
    'Content-Type': 'application/json',
    
   
    },
  };

  let myRequest = new Request(urlUse, myInitGet);
  console.log("urlUse:", urlUse)
  
  Fetch(myRequest, action)
}



export {createGetRequest, createPostRequest, requestLoginRegister , authRequest};
