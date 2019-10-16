interface NavigationItem {
  name: string;
  link: string;
  icon?: string;
  children?: Array<NavigationItem>;
}
