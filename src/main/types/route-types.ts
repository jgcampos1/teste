import { type LayoutConfig } from '../config/layout-config';

export type IRoute = {
  name: string;
  path: string;
  fallback?: React.ReactNode;
  element: React.ReactNode | null;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
  layout: keyof typeof LayoutConfig;
  roles: Array<string>;
};
