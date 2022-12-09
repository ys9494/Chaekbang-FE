export interface DummyItem {
  id: string;
  user: {
    image?: string;
    name: string;
  };
  post: {
    image?: string;
    title: string;
  };
}