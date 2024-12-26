// export const BASEPATH= "/video"
export const BASEPATH = "/shorts";

export function getApiUrl(language: number): string {
  return typeof process !== "undefined"
    ? (language === 1
        ? process.env.REMIX_DOMAIN_ENG
        : process.env.REMIX_DOMAIN_HINDI) || ""
    : "";
}

export function getLanguageFromDomain(url: string): number {
  const domain = new URL(url).hostname;
  return domain.endsWith(".com") ? 1 : domain.endsWith(".in") ? 2 : 1;
}
