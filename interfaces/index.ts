// interfaces/index.ts

// Represents props for a Card component
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
}

// Represents props for a Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: string;
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
