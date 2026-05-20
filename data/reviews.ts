export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  type: "Wine Tour" | "Business Travel" | "Private Tour" | "Hotel Transfer" | "Airport Transfer";
  avatarUrl: string;
}

export const reviews: Review[] = [
  {
    id: "milan-shah",
    name: "Milan Shah",
    date: "September 2023",
    rating: 5,
    text: "Would highly recommend booking with Sanath and his team for any services. We used them for a tour around Beaujolais — Sanath had a wonderful car (large Mercedes van), was incredibly knowledgeable about the region, and was well connected with the wineries.",
    type: "Wine Tour",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop",
  },
  {
    id: "marc",
    name: "Marc",
    date: "February 2022",
    rating: 5,
    text: "Fantastic service! Sanath is very professional. I worked with him for a group of clients we needed to transfer in Lyon for a week. Sanath has been punctual, professional and flexible over the whole period. He can communicate fluently in English and in French.",
    type: "Business Travel",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80&auto=format&fit=crop",
  },
  {
    id: "manuel-rodriguez",
    name: "Manuel Rodriguez",
    date: "January 2022",
    rating: 5,
    text: "Très contents de notre journée avec Sanath sur Lyon, nous avons découvert la ville autrement. Je recommande vivement !",
    type: "Private Tour",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80&auto=format&fit=crop",
  },
  {
    id: "mado-kir",
    name: "Mado Kir",
    date: "July 2023",
    rating: 5,
    text: "Très sympa et fiable. Déjà à la Villa Maïa très fiable. Merci Monsieur de Hambourg.",
    type: "Hotel Transfer",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop",
  },
];
