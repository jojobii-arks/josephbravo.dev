export interface StringIndexObject {
  [index: string]: string;
}

export interface Project {
  title: string;
  description: string;
  urls: {
    deployment: string;
    repo: string;
  };
  tech: string;
}

export interface ProjectCollection {
  header: string;
  subtitle?: string;
  content: Project[];
}
