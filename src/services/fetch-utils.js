import { client, checkError } from './client';

export async function getBeanieBabies(from = 0, to = 30, perPage = 30) {
  const response = await client
    .from('beanie_babies')
    .select('*', { count: 'exact' })
    .range(from, to);

  const lastPage = Math.ceil(response.count / (perPage));

  return { ...response, lastPage };
}

export async function getSingleBeanie(id) {
  const response = await client
    .from('beanie_babies')
    .select()
    .match({ id })
    .single();

  return checkError(response);

}