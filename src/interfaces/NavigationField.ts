interface NavigationField {
  name: string;
  link: string;
  icon?: string;
  children?: Array<NavigationField>;
}
