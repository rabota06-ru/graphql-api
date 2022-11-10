export function parseCookies(str: string) {
  return str.split(";").reduce((cookies, cookie) => {
    const entry = cookie.split("=");
    if (entry.length === 2 && entry[0].trim() && entry[1].trim())
      cookies[decodeURIComponent(entry[0].trim())] = decodeURIComponent(
        entry[1].trim()
      );
    return cookies;
  }, {} as Record<string, string>);
}
