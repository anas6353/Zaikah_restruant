export type MenuItem = {
  name: string;
  price?: string;
  prices?: { label: string; value: string }[];
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  columns?: string[];
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "soup",
    title: "Appetizer — Soup",
    columns: ["Quarter", "Full"],
    items: [
      { name: "Special Soup", prices: [{ label: "Quarter", value: "400" }, { label: "Full", value: "1600" }] },
      { name: "Hot & Sour Soup", prices: [{ label: "Quarter", value: "350" }, { label: "Full", value: "1399" }] },
      { name: "Chicken Corn Soup", prices: [{ label: "Quarter", value: "350" }, { label: "Full", value: "1300" }] },
      { name: "Thai Soup", prices: [{ label: "Quarter", value: "350" }, { label: "Full", value: "1200" }] },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    items: [
      { name: "Fresh Salad", price: "230" },
      { name: "Raita (Plain)", price: "160" },
      { name: "Raita (Mint)", price: "190" },
      { name: "Katchumar Salad", price: "250" },
      { name: "Russian Salad", price: "540" },
      { name: "Chicken Pineapple Salad", price: "699" },
      { name: "Salad Bar Mix", price: "699" },
    ],
  },
  {
    id: "karahi",
    title: "Pakistani Karahi",
    columns: ["Half", "Full"],
    items: [
      { name: "Mutton Karahi", prices: [{ label: "Half", value: "2550" }, { label: "Full", value: "4999" }] },
      { name: "Desi Murgh Karahi", prices: [{ label: "Half", value: "—" }, { label: "Full", value: "4800" }] },
      { name: "Beef Karahi", prices: [{ label: "Half", value: "1400" }, { label: "Full", value: "2700" }] },
      { name: "Chicken Karahi", prices: [{ label: "Half", value: "1100" }, { label: "Full", value: "2000" }] },
      { name: "Tawa Chicken Karahi", prices: [{ label: "Half", value: "1200" }, { label: "Full", value: "2100" }] },
      { name: "White Chicken Karahi", prices: [{ label: "Half", value: "1150" }, { label: "Full", value: "2200" }] },
      { name: "Chicken Makhani Karahi", prices: [{ label: "Half", value: "1250" }, { label: "Full", value: "2400" }] },
    ],
  },
  {
    id: "handi",
    title: "Chicken Boneless Handi",
    subtitle: "All handi options — PKR 1599",
    items: [
      { name: "Chicken Jalfrezi Handi", price: "1599" },
      { name: "Chicken Ginger Handi", price: "1599" },
      { name: "Chicken Boneless Handi", price: "1599" },
      { name: "Chicken Achari Handi", price: "1599" },
      { name: "Chicken Makhni Handi", price: "1599" },
      { name: "Green Chili With Lemon", price: "1599" },
      { name: "Chicken Bartha", price: "1599" },
    ],
  },
  {
    id: "bbq",
    title: "Zaika Special BBQ",
    items: [
      { name: "Chicken Tikka Boti (16 Pcs)", price: "1400" },
      { name: "Chicken Kabab (4 Pcs)", price: "1100" },
      { name: "Chicken Cheese Kabab (4 Pcs)", price: "1400" },
      { name: "Beef Kabab (4 Pcs)", price: "1050" },
      { name: "Haray Bhary Kabab (4 Pcs)", price: "1200" },
      { name: "Pizza Kabab (4 Pcs)", price: "1400" },
      { name: "Chicken Reshmi Kabab", price: "1200" },
      { name: "Chicken Malai Boti (16 Pcs)", price: "1600" },
      { name: "Chicken Tikka Piece (L/B)", price: "510" },
      { name: "Special BBQ Platter", price: "4800" },
      { name: "Special BBQ Platter Small", price: "2950" },
      { name: "Mutton Chanp Seekh", price: "750" },
      { name: "Mutton Tikka Seekh (16 Pcs)", price: "2200" },
      { name: "Mutton Kabab (4 Pcs)", price: "1600" },
    ],
  },
  {
    id: "seafood",
    title: "Sea Food",
    items: [
      { name: "Rahoo Grilled Fish", price: "1700" },
      { name: "Rahoo Fish (Fried)", price: "2200" },
      { name: "Fried Finger Fish", price: "3000" },
      {
        name: "Finger Fish",
        prices: [
          { label: "Quarter", value: "750" },
          { label: "Half", value: "1500" },
          { label: "Full", value: "3000" },
        ],
      },
    ],
  },
  {
    id: "sajji",
    title: "Sajji",
    items: [
      { name: "Sajji Full", price: "2200" },
      { name: "Sajji Half", price: "1150" },
    ],
  },
  {
    id: "cuisine",
    title: "Pakistani Cuisine",
    items: [
      { name: "Chicken Biryani", price: "510" },
      { name: "Sada Biryani", price: "300" },
      { name: "Chicken Qorma Single", price: "410" },
      { name: "Dal Chana", price: "300" },
      { name: "Dal Mash", price: "350" },
      { name: "Mix Vegetable", price: "300" },
      { name: "Matanjan Rice", price: "300" },
    ],
  },
  {
    id: "rice",
    title: "Zaikah Rice",
    items: [
      { name: "Zaikah Special Rice", price: "1400" },
      { name: "Egg Fried Rice", price: "1100" },
      { name: "Chicken Fried Rice", price: "1200" },
      { name: "Vegetable Fried Rice", price: "1000" },
      { name: "Chicken Masala Rice", price: "1300" },
    ],
  },
  {
    id: "chinese",
    title: "Zaikah Special Chinese",
    subtitle: "Wok-fired classics",
    items: [
      { name: "Chicken Mongolian", price: "1599" },
      { name: "Chicken Manchurian", price: "1599" },
      { name: "Chicken Shashlik", price: "1599" },
      { name: "Chicken Black Pepper", price: "1599" },
      { name: "Chicken Garlic", price: "1599" },
      { name: "Chicken Chilli Onion", price: "1599" },
      { name: "Chicken Vegetable", price: "1599" },
      { name: "Chicken Chilli Dry", price: "1599" },
      { name: "Sweet & Sour Chicken", price: "1599" },
      { name: "Chicken Cashew Nut", price: "1700" },
      { name: "Chicken Drum Stick (4 Pcs)", price: "980" },
    ],
  },
  {
    id: "fastfood",
    title: "Fast Food",
    items: [
      { name: "Chicken Burger", price: "430" },
      { name: "Chicken Cheese Burger", price: "490" },
      { name: "Chicken Spicy Burger", price: "440" },
      { name: "Chicken Cheese Spicy Burger", price: "490" },
      { name: "Zinger Burger", price: "530" },
      { name: "Chicken Club Sandwich", price: "540" },
      { name: "Chicken Sandwich", price: "460" },
      { name: "Chicken Cheese Sandwich", price: "490" },
      { name: "Chicken Shawarma", price: "250" },
      { name: "Chicken Cheese Shawarma", price: "300" },
      { name: "Chicken Zinger Shawarma", price: "350" },
    ],
  },
  {
    id: "roast",
    title: "Zaikah Special Roast",
    items: [
      {
        name: "Daigi Chargha",
        prices: [
          { label: "Quarter", value: "580" },
          { label: "Half", value: "1150" },
          { label: "Full", value: "2200" },
        ],
      },
    ],
  },
  {
    id: "cold",
    title: "Cold Bar",
    items: [
      { name: "Smoothies (Kiwi, Strawberry, Peach)", price: "649" },
      { name: "Mojitos (Wildberry, Green Apple, Blue Lagoon)", price: "349" },
      { name: "Pina Colada", price: "499" },
      { name: "Chocolate Ganache", price: "649" },
      { name: "OG Oreo Shake", price: "649" },
      { name: "Mint Margarita", price: "299" },
      { name: "Fresh Lime", price: "349" },
      { name: "Sweet Lassi", price: "249" },
      { name: "Salt Lassi", price: "249" },
    ],
  },
  {
    id: "hot",
    title: "Hot Bar",
    items: [
      { name: "Latte", price: "449" },
      { name: "Cappuccino", price: "499" },
      { name: "Karak Tea", price: "249" },
      { name: "Cardamom Tea", price: "249" },
      { name: "Tea", price: "170" },
      { name: "Green Tea", price: "149" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      { name: "Soft Drinks", price: "100" },
      { name: "Mineral Water (Large)", price: "160" },
      { name: "Mineral Water (Small)", price: "85" },
      { name: "Fresh Juices", price: "450" },
      { name: "Fresh Shake", price: "300" },
    ],
  },
  {
    id: "tandoor",
    title: "Tandoor",
    items: [
      { name: "Sada Roti", price: "17" },
      { name: "Plain Naan", price: "35" },
      { name: "Roghani Naan", price: "120" },
      { name: "Garlic Naan", price: "150" },
      { name: "Kalvangi Naan", price: "160" },
      { name: "Qeema Naan Beef", price: "490" },
      { name: "Qeema Naan Chicken", price: "450" },
      { name: "Roti Per Head", price: "80" },
      { name: "Tandoori Pratha", price: "150" },
    ],
  },
  {
    id: "pakwan",
    title: "Pakwan Special",
    subtitle: "Bulk & catering orders — call us on WhatsApp",
    items: [
      { name: "Chicken Biryani Daig (10×12)", price: "21,000" },
      { name: "Chicken Biryani Daig (8×10)", price: "18,000" },
      { name: "Chana Palao (10 Kg)", price: "14,000" },
      { name: "Chicken Qorma (10 Kg)", price: "18,500" },
      { name: "Chicken Haleem (10×12)", price: "24,000" },
      { name: "Chicken Qorma (10 Kg) — Large Batch", price: "38,000" },
    ],
  },
];
