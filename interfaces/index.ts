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
