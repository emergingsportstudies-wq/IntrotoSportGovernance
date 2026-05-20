export interface Module {
  id: string;
  number: string;
  title: string;
}

export interface Note {
  moduleId: string;
  title: string;
  content: string;
}
