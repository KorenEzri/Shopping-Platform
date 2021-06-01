import { network, routes } from '.';

export const getUserProfile = async (
  dispatch: (arg0: any) => any,
  action: (arg0: { user: any }) => any,
) => {
  const response = await network.post(routes.private.user_profile);
  if (response.status === 200) {
    const { data } = response;
    dispatch(
      action({
        user: data.user,
      }),
    );
  }
};
