export interface Theme {
  id: number;
  idroom: number;
  description: string;
}

export interface ThemeState {
  loading: boolean;
  themes: Theme[];
}
