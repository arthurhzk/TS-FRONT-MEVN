export interface Page {
  name: string;
  path: string;
}

const pages: Page[] = [
  {
    name: "Todos os produtos",
    path: "/",
  },
  {
    name: "Tênis",
    path: "/sneakers",
  },
  {
    name: "Meias",
    path: "/socks",
  },
];

export default pages;
