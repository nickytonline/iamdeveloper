import { Context } from 'https://edge.netlify.com';
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts';
import { getLocalizedDate } from '../utils/markupUtils.ts';

export default async (request: Request, context: Context) => {
  // Locale is the first language in the Accept-Language header or 'en-US' if not present
  const locale =
    request.headers.get('Accept-Language')?.split(',')[0] ||
    request.headers.get('Accept-Language') ||
    'en-US';
  const { timezone = '' } = context.geo;

  // capture the HTTP response so we can modify it
  const response = await context.next();
  // Cache the response for 24 hours
  response.headers.set(
    'Cache-Control',
    'public, max-age=86400, s-maxage=86400'
  );
  response.headers.set('x-timezone', timezone);
  response.headers.set('Vary', 'Accept-Language, x-timezone');

  return (
    new HTMLRewriter()
      .on('date[datetime]', {
        element(element: any) {
          // get the date value as a string from the HTML data attribute
          const dateString = element.getAttribute('datetime');

          // convert the string to a JavaScript date
          const date = new Date(dateString);

          // use toLocaleString() with the locale from the request
          // and the timezone from context.geo
          const localizedDate = getLocalizedDate({
            date,
            locale,
            timezone,
          });

          // modify the HTML element
          element.setInnerContent(`${localizedDate}`);
        },
      })
      // transform the original response!
      .transform(response)
  );
};

export const config = {
  cache: 'manual',
  path: '/*',
  exclude_patterns: ['/stream-schedule/'],
};
