export interface IRepository {
  id: string;
  url: string;
  name: string;
  createdAt: string;
  description: string;
  owner: {
    avatarUrl: string;
    login: string;
  };
  stargazers: {
    totalCount: number;
  };
  issues: {
    totalCount: number;
  };
}
