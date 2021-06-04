import axios from 'axios';

const awsURL = 'http://107.21.87.118:8080/api/v1';
const localURL = 'http://localhost/api/v1';
const baseURL = localURL;

export const network = axios.create({ baseURL });
export const routes = {
  test: { test: `${baseURL}/item/test` },
  item: `${baseURL}/item`,
  validations: {
    username: `${baseURL}/validation/validateusername`,
    nickname: `${baseURL}/validation/validatenickname`,
  },
  register: {
    auth: `${baseURL}/auth/register`,
    user: `${baseURL}/user/register`,
  },
  login: {
    auth: `${baseURL}/auth/login`,
    user: `${baseURL}/user/user`,
  },
  logout: `${baseURL}/auth/logout`,
  token: {
    validate_token: `${baseURL}/auth/tokenValidate`,
    token: `${baseURL}/auth/token`,
    refresh: `${baseURL}/auth/refresh`,
  },
  private: {
    user_profile: `${baseURL}/user/user`,
  },
};
