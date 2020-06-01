export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
}

export interface ResponseData {
  hits: Hit[];
}


