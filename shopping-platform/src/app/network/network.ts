import axios from 'axios';
const baseURL = 'http://107.21.87.118:8080/api/v1';
export const network = axios.create({ baseURL });
export const routes = {
  test: { test: `${baseURL}/item/test`, all: `${baseURL}/item/all` },
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
