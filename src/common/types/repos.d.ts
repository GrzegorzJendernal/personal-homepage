interface Repo {
  id: number;
  name: string;
  description: string;
  homepage: string;
  html_url: string;
}

export interface Repos {
  data: Repo[];
}
