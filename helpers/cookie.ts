type ICookieOptionValue = number | string | boolean | Date;

interface ICookieOptions {
  [key: string]: ICookieOptionValue;
}
// Получение куки
export const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[$\\/+^])/g, "\\$1")}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

  // Принятие куки
export const setCookie = (
  name: string,
  value: string,
  options: ICookieOptions = {}
): void => {
  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;

  for (const optionKey in options) {
    if (!options.hasOwnProperty(optionKey)) continue;

    if (optionKey === "expires") {
      if (
        typeof options[optionKey] === "number" ||
        typeof options[optionKey] === "object"
      ) {
        const d = new Date();
        d.setTime(
          options[optionKey] instanceof Date
            ? options[optionKey].getTime()
            : Date.now() + Number(options[optionKey]) * 1000
        );
        updatedCookie += `; expires=${d.toUTCString()}`;
      }
    } else {
      updatedCookie += `; ${optionKey}`;
      if (options[optionKey] === true) {
        updatedCookie += "";
      } else {
        updatedCookie += `=${options[optionKey]}`;
      }
    }
  }

  document.cookie = updatedCookie;
};
