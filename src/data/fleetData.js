import prius1 from "../assets/images/fleet/prius/prius-1.jpg";
import prius2 from "../assets/images/fleet/prius/prius-2.jpg";
import prius3 from "../assets/images/fleet/prius/prius-3.jpg";

import raize1 from "../assets/images/fleet/raize/raize-1.jpg";
import raize2 from "../assets/images/fleet/raize/raize-2.jpg";
import raize3 from "../assets/images/fleet/raize/raize-3.jpg";

import vezel1 from "../assets/images/fleet/vezel/vezel-1.jpg";
import vezel2 from "../assets/images/fleet/vezel/vezel-2.jpg";
import vezel3 from "../assets/images/fleet/vezel/vezel-3.jpg";

import every1 from "../assets/images/fleet/suzuky-every/every-1.jpg";
import every2 from "../assets/images/fleet/suzuky-every/every-2.jpg";

export const fleetData = [
  {
    id: 1,
    name: "Toyota Prius 2018",
    type: "Hybrid Car",
    seats: 3,
    ac: "Yes",
    luggage: "2 Large Bags",
    images: [prius1, prius2, prius3],
  },
  {
    id: 2,
    name: "Toyota Raize",
    type: "Compact SUV",
    seats: 3,
    ac: "Yes",
    luggage: "2 Bags",
    images: [raize1, raize2, raize3],
  },
  {
    id: 3,
    name: "Honda Vezel",
    type: "Premium SUV",
    seats: 3,
    ac: "Yes",
    luggage: "2 Bags",
    images: [vezel1, vezel2, vezel3],
  },
  {
    id: 4,
    name: "Suzuki Every 2025 - 3 Seats",
    type: "Mini Van",
    seats: 3,
    ac: "Yes",
    luggage: "3 Large Bags",
    images: [every1, every2],
  },
  {
    id: 5,
    name: "Suzuki Every 2025 - 5 Seats",
    type: "Mini Van",
    seats: 5,
    ac: "Yes",
    luggage: "Limited luggage with 5 passengers",
    images: [every1, every2],
  },
];