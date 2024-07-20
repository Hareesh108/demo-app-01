/* eslint-disable consistent-return */
import axios, { AxiosError } from "axios";
import {
  ApiContentClient,
  ApiServerClient,
} from "../../../../services/ApiClient";

const basePath = "http://test-int.axr-engineering.net";

export const getShareholderTypes = async () => {
  //   const uri = `${basePath}/connected-party/v1/shareholderTypes`;

  //   const res = ApiServerClient.get(uri);

  //   return res;

  const response = await axios.get(
    `${basePath}/connected-party/v1/shareholderTypes`
  );
  return response;
};

export const sentConnectedPartiesAPi = async (payload: any) => {
  const response = await axios.post(
    `${basePath}/connected-party/v1/create`,
    payload
  );
  return response;
};
