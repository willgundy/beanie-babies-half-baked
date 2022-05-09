import { client, checkError } from './client';

export async function getBeanieBabies(from = 0, to = 30, perPage = 30, filter = '') {
  const response = await client
    .from('beanie_babies')
    .select('*', { count: 'exact' })
    .range(from, to)
    .ilike('title', `%${filter}%`);

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