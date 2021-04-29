import { EntityRequest } from '../types';

/**
 * Base entity request.
 * @template T The response object for the transformed data.
 * @template R The raw data object as a response from the API.
 */
async function base<T, R>({
  name,
  id,
  transform,
}: EntityRequest<T, R>): Promise<T> {
  const response = await fetch(`https://pokeapi.co/api/v2/${name}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }

  return transform(await response.json());
}

export default base;
