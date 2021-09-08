/**
URL Parser Exercise

We need some logic that extracts the variable parts of a url into a hash. The keys
of the extract hash will be the "names" of the variable parts of a url, and the
values of the hash will be the values. We will be supplied with:

  1. A url format string, which describes the format of a url. A url format string
  can contain constant parts and variable parts, in any order, where "parts"
  of a url are separated with "/". All variable parts begin with a colon. Here is
  an example of such a url format string:

    '/:version/api/:collection/:id'

  2. A particular url instance that is guaranteed to have the format given by
  the url format string. It may also contain url parameters. For example,
  given the example url format string above, the url instance might be:

    '/6/api/listings/3?sort=desc&limit=10'

Given this example url format string and url instance, the hash we want that
maps all the variable parts of the url instance to their values would look like this:

  {
    version: 6,
    collection: 'listings',
    id: 3,
    sort: 'desc',
    limit: 10
  }

Please implement a solution to this problem in JavaScript with attention to code
structure and readability. Feel free to use low-level libraries like underscore.
 */

function parseUrl(format: string, url: string) {
  let parsedUrl: { [key: string]: string } = {};

  const [splittedUrl, queryString]: any = url.split("?");
  const params = format.split("/");
  const values = splittedUrl.split("/");
  const queryParams = queryString.split("&");

  values.forEach((value: string, i: number) => {
    if (!value.length || !params[i].includes(":")) {
      return;
    }

    const key = params[i].slice(1);
    parsedUrl[key] = value;
  });

  queryParams.forEach((queryParam: string) => {
    const [key, value] = queryParam.split("=");
    parsedUrl[key] = value;
  });

  return parsedUrl;
}

console.log(
  parseUrl(
    "/:version/api/:collection/:id",
    "/6/api/listings/3?sort=desc&limit=10"
  )
);
console.log(
  parseUrl(
    "/:version/api/:collection/:id",
    "/3/api/products/6?sort=asc&limit=10&offset=3"
  )
);
console.log(
  parseUrl(
    "/:test/api/:value/:number/:name",
    "/3/api/products/6/pedro?sort=asc&limit=10"
  )
);
