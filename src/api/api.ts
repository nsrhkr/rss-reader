const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";

type Feed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

type Items = {
  title: string;
  pubDate: string;
  link: string;
  guide: string;
  author: string;
  thumbnail: string;
  description: string;
  encloure: { thumbnail: string };
  categories: [];
};

export type RSS2json = {
  status: string;
  feed: Feed;
  items: Array<Items>;
};

// rss2json APIを利用してRSSをjsonとしてfetch
export const fetchRSS = (url: string) => {
  return fetch(corsUrl + url);
};
