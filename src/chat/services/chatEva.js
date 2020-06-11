import axios from 'axios';

const req = axios;


const broker = 'https://api-uhg-brazil.eva.bot/conversations';
const apikey = 'af12ac9c-339d-4b25-8a2d-34277d9bb1ff';
const project = 'Amil Ura';
const os = 'WINDOW';
const contentType = 'application/json';
const accept = 'application/json';
const userRef = 'demochat';
const locale = 'pt-BR';
const channel = 'Amil Ura';
const os_version = "10";

// const front = 'http://localhost:3000';
// const broker = 'https://poc-callcenters.eva.bot/evin/conversations';
// const apikey = '377fa4a1-e5a3-4216-8dfe-0c6de1630727';
// const project = 'Amil';
// const os = 'web';
// const contentType = 'application/json';
// const accept = 'application/json';
// const userRef = 'LOCALHOST';
// const locale = 'pt-BR';
// const channel = 'Web Amil';

async function request (texto, sessionCode, codigo,  context) {
  let salutation;

  if(texto === ""){
    salutation = "%EVA_WELCOME_MSG";    
  }else{
    salutation = "";
  }

  const resp = await  req({
    method: 'post',
    url: broker ,
    data: {
      text: texto,
      codigo,
      context, 
      code: salutation     
    },
  
    headers: {
      "API-KEY": apikey,
      "PROJECT": project,
      "CHANNEL" : channel,
      "OS": os,
      "Content-Type": contentType,
      "Accept": accept,
      "USER-REF": userRef,
      "LOCALE": locale,
      "OS-VERSION": os_version
    }
  })

  let teste = resp.data; 

  return teste;

}

export default request;
