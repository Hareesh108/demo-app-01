import axios from 'axios';

export const ApiContentClient = axios.create({
  baseURL: process.env.CONTENT_URL,
});

export const ApiServerClient = axios.create({
  baseURL: process.env.SERVER_URL,
});

console.log(process.env);


ApiContentClient.interceptors.request.use(
  (config) =>
    // const accessToken = store.get('tokens')
    //   ? store.get('tokens').token.access_token
    //   : null;
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    config
  ,
  (error) => Promise.reject(error),
);


ApiContentClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return Promise.reject(error);
  },
);

