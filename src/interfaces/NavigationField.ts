interface NavigationField {
  name: string;
  link: string;
  hideOnMobile?: boolean;
  icon?: string;
  children?: Array<NavigationField>;
}
