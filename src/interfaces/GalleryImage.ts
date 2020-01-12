interface GalleryImage {
  title: string;
  link: string;
  /** Images in grid can have action button which leads for instance to e-shop version of the image */
  imageRelationLink?: string;
  /** An integer which defines how much squares to take in width */
  rows?: number;
  /** An integer which defines how much squares to kae in height */
  columns?: number;
}