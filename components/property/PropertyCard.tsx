import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

type Props = {
  property: PropertyProps;
};

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <div className="relative w-full h-48">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-600">
          {property.address.city}, {property.address.country}
        </p>
        <p className="mt-2 text-[#161117] font-semibold">${property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;

