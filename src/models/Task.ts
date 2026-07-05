export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  estimatedHours: number;
  actualHours: number;
  priority: number;
  completed: boolean;
  createdAt: string;
}