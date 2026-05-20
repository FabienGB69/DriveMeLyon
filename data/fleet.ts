export interface Vehicle {
  id: string;
  name: string;
  class: string;
  icon: string;
  passengers: string;
  luggage: string;
  highlight?: boolean;
  specs: { label: string; value: string }[];
}

export const fleet: Vehicle[] = [
  {
    id: "classe-e",
    name: "Mercedes Classe E",
    class: "Executive Sedan",
    icon: "car",
    passengers: "Max 3",
    luggage: "2 Large",
    specs: [
      { label: "Passengers", value: "Max 3" },
      { label: "Luggage", value: "2 Large" },
      { label: "Interior", value: "Black Leather" },
      { label: "Amenities", value: "Wi-Fi & Water" },
    ],
  },
  {
    id: "classe-s",
    name: "Mercedes Classe S",
    class: "First Class Luxury",
    icon: "crown",
    passengers: "Max 3",
    luggage: "2 Large",
    highlight: true,
    specs: [
      { label: "Passengers", value: "Max 3" },
      { label: "Luggage", value: "2 Large" },
      { label: "Comfort", value: "Executive Seats" },
      { label: "Amenities", value: "VIP Treatment" },
    ],
  },
  {
    id: "classe-v",
    name: "Mercedes Classe V",
    class: "Premium MPV / Van",
    icon: "van",
    passengers: "Max 7",
    luggage: "7 Large",
    specs: [
      { label: "Passengers", value: "Max 7" },
      { label: "Luggage", value: "7 Large" },
      { label: "Setup", value: "Salon / Face-to-Face" },
      { label: "Amenities", value: "Wi-Fi, Water & USB" },
    ],
  },
  {
    id: "minibus",
    name: "Premium Minibus",
    class: "Group Excursions",
    icon: "bus",
    passengers: "Max 8+",
    luggage: "10+ Large",
    specs: [
      { label: "Passengers", value: "Max 8+" },
      { label: "Luggage", value: "10+ Large" },
      { label: "Comfort", value: "Spacious Seating" },
      { label: "Usage", value: "Wine Tours & Events" },
    ],
  },
];
