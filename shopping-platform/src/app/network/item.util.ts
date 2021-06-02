import { network, routes } from './network';

export const getItemsByQuery = async (query: string) => {
  if (!query) return;
  try {
    const { data } = await network.get(`${routes.item}/${query}`);
    return data;
  } catch ({ message }) {
    console.log(message);
    return 'ERROR';
  }
};
