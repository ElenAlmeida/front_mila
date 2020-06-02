import axios from 'axios';

const req = axios;

const front = 'http://localhost:3000';
const broker = 'https://poc-callcenters.eva.bot/evin';
const apikey = '377fa4a1-e5a3-4216-8dfe-0c6de1630727';
const project = 'Amil';
const os = 'web';
const contentType = 'application/json';
const accept = 'application/json';
const userRef = 'LOCALHOST';
const locale = 'pt-BR';
const channel = 'Web Amil';


async function request (texto, sessionCode, codigo,  context) {

  const resp = await  req({
    method: 'post',
    url: broker + '/conversations/'  ,
    data: {
      text: texto,
      codigo,
      context
    },
  
    headers: {
      "api-key": apikey,
      "project": project,
      "os": os,
      "content-type": contentType,
      "Accept": accept,
      "user-ref": userRef,
      "locale": locale,
      "channel": channel
    }
  })

  let teste = resp.data;

  console.log(teste)
  
  // .then((response) => {

 

  // console.log(resp)

  // }).catch(() => {
  //   console.log('error')
  // })

  return teste;

}

export default request;
