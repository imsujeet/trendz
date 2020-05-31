export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
}

export interface RootResponse {
  hits: Hit[];
}

export interface ResponseData extends RootResponse, Hit {
}
