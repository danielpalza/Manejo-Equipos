
//enviar url, modo, action
async function Fetch(url, mod, action) {
  /*const token = props.state.statReducer.user.token;
  const body = props.state.statReducer.body;*/

  

     /**User routes */
    const urlUse = `api/v1/${url}`;

    // arreglar fallas en envios
    const myInitPost = {
      method: "POST",
      body: JSON.stringify(body.body),

      headers: {
        'Content-Type': 'application/json',
        token,
      },
    };
    const myInitGet = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    };

    //Configuracion de request
    var myRequest = new Request(
      urlUse,
      mod === 'POST' ? myInitPost : myInitGet
    );

    await fetch(myRequest)
      .then((res) => res.json())
      .then((data) => {
        console.log('data fetch:', data);
        action(data);
        })
      .catch((e) => console.log({ Status: 'ERROR_FETCH', message:"Error en el proceso", text: e }));
  

}

export default Fetch;
