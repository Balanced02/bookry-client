import { useContext } from 'react';
import axios, { AxiosRequestHeaders, Method } from 'axios';
import AuthContext from '../modules/Auth/context/AuthContext';

export const SERVER_DOMAIN = 'https://bookry-server.herokuapp.com/api/v1'; //TODO; domain URL

export type ApiCallTypes = {
  url: string;
  method?: Method;
  data?: any;
  externalResource?: string;
  passedToken?: string;
};
interface HeaderOptios {
  headers: AxiosRequestHeaders;
  url: string;
  method: Method;
  data?: any;
}

export const useApi = () => {
  const { token } = useContext(AuthContext);
  const callApi = ({ url, data, method, externalResource, passedToken }: ApiCallTypes): Promise<any> => {
    if (!token && !passedToken) {
      // TODO: console.log(`Calling Api ${url}`);
      console.log(`Calling Api ${url}`);
    }
    const axiosOptions: HeaderOptios = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      url: externalResource ? url : `${SERVER_DOMAIN}${url}`,
      method: method || 'get',
    };
    if (token || passedToken) {
      axiosOptions.headers.Authorization = `${`Bearer ${passedToken ? passedToken : token}`}`;
      // TODO:  console.log(`Calling Secured Api ${url}`);
      console.log(`Calling Secured Api ${url}`);
    }
    if (data) {
      axiosOptions.data = data;
    }
    return new Promise(function (resolve, reject) {
      axios(axiosOptions)
        .then(({ data }) => {
          console.log(url, 'success');
          resolve(data);
        })
        .catch((error) => {
          console.log(url, 'error');
          reject(error);
        });
    });
  };

  return {
    callApi,
  };
};
