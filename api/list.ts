import { ListRequest, ListResponse } from './types';

/**
 * Pokedex list search
 */
async function list({
  name,
  offset,
  limit,
}: ListRequest): Promise<ListResponse> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/${name}?offset=${offset}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return {
    ...data,
    results: data.results.map((result, index) => ({
      ...result,
      id: offset + index + 1,
    })),
  };
}

export default list;
