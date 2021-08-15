export default async ({ productId, changes }) => {
  const productsUrl = new URL(`http://localhost:3000/grocery/${productId}`);

  return fetch(productsUrl, {
    method: 'PATCH',
    body: JSON.stringify({ ...changes }),
  });
};
