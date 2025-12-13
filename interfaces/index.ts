// interfaces/index.ts

// Represents props for a Card component
export interface CardProps {
  title: string;
  description?: string; // optional property
  imageUrl?: string;
}

// Represents props for a Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void; // optional function when button is clicked
  variant?: 'primary' | 'secondary' | 'outline'; // optional style type
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  date: string;
  tripType: string;
  comment: string;
}

export interface AmenityIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Amenity {
  label: string;
  icon: AmenityIcon;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  description: string;
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
