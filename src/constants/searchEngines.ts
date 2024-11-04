export const SEARCH_ENGINES: Record<
  string,
  {
    name: string
    url: string
  }
> = {
  google: {
    name: 'Google',
    url: 'https://www.google.com/search?q={}',
  },
  custom: {
    name: 'Custom',
    url: '',
  },
}

export type SearchEngineOption = keyof typeof SEARCH_ENGINES
