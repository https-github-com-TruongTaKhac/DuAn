import instance from "../config/axios";

const signup = async (data: any) => {
  const response = await instance.post(`auth/signup`, data);
  return response.data;
};

const signin = async (data: any) => {
  const response = await instance.post(`auth/signin`, data);
  return response.data;
};

const refreshToken = async (token: string) => {
  const response = await instance.post(
    `refresh-token`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

const logout = async (token: string) => {
  const response = await instance.post(
    `logout`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

export default {
  signup,
  signin,
  refreshToken,
  logout,
};
