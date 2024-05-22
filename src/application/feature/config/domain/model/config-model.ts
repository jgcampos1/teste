export type Layout = {
  logo?: string;
  primary_color?: string;
  secondary_color?: string;
  background_color?: string;
  background_image?: string;
  location_images?: string[];
};

export interface ConfigModel {
  layout?: Layout;
  id?: number;
}
