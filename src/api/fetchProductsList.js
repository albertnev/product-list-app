export default async ({ page, productsPerPage }) => {
  const productsUrl = new URL('http://localhost:3000/grocery');
  productsUrl.searchParams.append('_page', page);
  productsUrl.searchParams.append('_limit', productsPerPage);

  return fetch(productsUrl);
};
