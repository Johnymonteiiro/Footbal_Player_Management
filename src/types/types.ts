export interface User {
  id: string;
  name: string;
  email: string;
  dorsal: number | null;
  profile: {
    nacionality: string | undefined;
    age: number | undefined;
    best_foot: string[] | undefined;
    position: string[] | undefined;
    goals: number | undefined;
    team: string | undefined;
  };
}
[];
