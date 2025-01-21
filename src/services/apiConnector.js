import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = ({ method, params, bodyData, header, url }) => {
  return axiosInstance({
    method: `${method}`,
    data: bodyData ? bodyData : null,
    url: `${url}`,
    headers: header ? header : null,
    params: params ? params : null,
  });
};
