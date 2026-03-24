export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  imageUrl: string;
}

export type SortField = 'title' | 'id' | 'completed';
export type SortOrder = 'asc' | 'desc';
