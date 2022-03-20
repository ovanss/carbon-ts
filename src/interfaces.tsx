export interface ISource {
  id: string | null;
  name: string;
}

export interface IArticle{
  source?: ISource;
  author?: string | null;
  title: string;
  description:  string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}