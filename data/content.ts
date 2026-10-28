export type Service = {
  title: string;
  description: string;
  icon: "sparkles" | "key" | "layers" | "timer";
};

export type Category = {
  title: string;
  subtitle: string;
  image: string;
};

export const images = {
  hero:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
  living:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  shortlet:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
  commercial:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  project:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=90",
  linen:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85",
  fabric:
    "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?auto=format&fit=crop&w=800&q=85",
  wood:
    "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=85",
  lighting:
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=85",
  bedding:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=85",
};

export const services: Service[] = [
  { title: "BESPOKE STYLING", description: "Tailored to your aesthetic", icon: "sparkles" },
  { title: "TURN-KEY SHORT-LET", description: "End-to-end apartment setups", icon: "key" },
  { title: "PREMIUM MATERIALS", description: "Curtains, bedding, & luxury decor", icon: "layers" },
  { title: "PRECISION EXECUTION", description: "Delivered on schedule", icon: "timer" },
];

export const categories: Category[] = [
  { title: "LIVING SPACES", subtitle: "Living, reimagined", image: images.living },
  { title: "SHORT-LET SETUPS", subtitle: "High-yield aesthetic spaces", image: images.shortlet },
  { title: "BEDROOM & BEDDING", subtitle: "A quieter way to sleep", image: images.bedroom },
  { title: "HOTEL & COMMERCIAL", subtitle: "Scale with luxury", image: images.commercial },
];

export const materials = [
  { name: "LUXURY LINEN & CURTAINS", image: images.linen },
  { name: "SOFT FABRICS", image: images.fabric },
  { name: "BESPOKE WOODWORK", image: images.wood },
  { name: "AMBIENT LIGHTING", image: images.lighting },
  { name: "PREMIUM BEDDING", image: images.bedding },
];
