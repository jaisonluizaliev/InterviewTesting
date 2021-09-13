export const baseURL = "https://gateway.marvel.com:443/v1/public/characters"

export const ts = '12345678';

export const publicKey = '2022cb78d86b61d6b498419230eddd16'

export const hash = 'fed4b5ef3aca4cd6624ace603a08a46f'

export const limit = 52

export const urlGet = `${baseURL}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`

export const urlGetWithId = `${baseURL}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`


// try {
//   const response = await fetch(
//     id
//       ? `${baseURL}/${id}?limit=${limit}&ts=${ts}${nameStartWith}&apikey=${publicKey}&hash=${hash}`
//       : `${baseURL}?limit=${limit}&ts=${ts}${nameStartWith}&apikey=${publicKey}&hash=${hash}`
//   );
//   const parsed = await response.json();
//   setData(parsed.data.results);
// } catch (e) {
//   console.error(e);
// }
