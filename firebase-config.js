// Configuration Firebase pour ella-commandes
// Ce fichier est public — c'est OK, les clés Firebase sont publiques par design.
// La sécurité est gérée par les Security Rules côté Firestore.

const firebaseConfig = {
  apiKey: "AIzaSyAyfI9iiEmDrO9dqE-ZyiVP7fwK93Ov23g",
  authDomain: "ella-commandes.firebaseapp.com",
  projectId: "ella-commandes",
  storageBucket: "ella-commandes.firebasestorage.app",
  messagingSenderId: "448697521665",
  appId: "1:448697521665:web:ac6ff4bbc21da8c3ec9200"
};

// Liste des plats disponibles à la pré-commande (extrait du menu, sans les boissons)
const MENU_ITEMS = [
  // Entrées Froides
  { id: "tarama", cat: "Entrées Froides", name: "Tarama", price: 6.5 },
  { id: "rus-salatasi", cat: "Entrées Froides", name: "Rus Salatası", price: 5.5 },
  { id: "domates-ezmesi", cat: "Entrées Froides", name: "Domates Ezmesi", price: 5.5 },
  { id: "humus", cat: "Entrées Froides", name: "Humus", price: 6.5 },
  { id: "cacik", cat: "Entrées Froides", name: "Cacık", price: 5.5 },
  { id: "patlican-ezmesi", cat: "Entrées Froides", name: "Patlıcan Ezmesi", price: 7 },
  { id: "yaprak-sarmasi", cat: "Entrées Froides", name: "Yaprak Sarması (4 pcs)", price: 6.9 },
  { id: "coban-salatasi", cat: "Entrées Froides", name: "Çoban Salatası", price: 8.5 },
  { id: "karisik-meze", cat: "Entrées Froides", name: "Karışık Meze", price: 12 },
  { id: "buyuk-karisik-meze", cat: "Entrées Froides", name: "Büyük Karışık Meze", price: 24 },
  { id: "salade-ella", cat: "Entrées Froides", name: "Salade Ella", price: 7.5 },

  // Entrées Chaudes
  { id: "mercimek-corbasi", cat: "Entrées Chaudes", name: "Mercimek Çorbası", price: 6 },
  { id: "iskembe-corbasi", cat: "Entrées Chaudes", name: "İşkembe Çorbası", price: 6 },
  { id: "kuru-fasulye", cat: "Entrées Chaudes", name: "Kuru Fasulye", price: 12 },
  { id: "sigara-boregi", cat: "Entrées Chaudes", name: "Sigara Böreği (4 pcs)", price: 7.5 },
  { id: "lahmacun", cat: "Entrées Chaudes", name: "Lahmacun", price: 4, image: "/media/lahmacun.png" },

  // Grillades
  { id: "kuzu-sis", cat: "Grillades", name: "1 · Kuzu Şiş", price: 18, image: "/media/sis-kebab.png" },
  { id: "karisik-izgara", cat: "Grillades", name: "2 · Karışık Izgara", price: 19 },
  { id: "tavuk-kanat", cat: "Grillades", name: "3 · Tavuk Kanat", price: 16.5 },
  { id: "pirzola", cat: "Grillades", name: "4 · Pirzola", price: 20 },
  { id: "assiette-vegetarienne", cat: "Grillades", name: "5 · Assiette Végétarienne", price: 15.5 },
  { id: "ciger", cat: "Grillades", name: "6 · Ciğer", price: 17.5 },
  { id: "vali-kebabi", cat: "Grillades", name: "7 · Vali Kebabı", price: 29 },
  { id: "adana-kebab", cat: "Grillades", name: "8 · Adana Kebab", price: 17.5, image: "/media/adana.png" },
  { id: "kaburga", cat: "Grillades", name: "9 · Kaburga", price: 16.5 },
  { id: "kofte", cat: "Grillades", name: "10 · Köfte", price: 17.5 },
  { id: "patlican-kebabi", cat: "Grillades", name: "11 · Patlıcan Kebabı", price: 17.5 },
  { id: "tavuk-sis", cat: "Grillades", name: "12 · Tavuk Şiş", price: 17.5 },
  { id: "domates-kebabi", cat: "Grillades", name: "13 · Domates Kebabı", price: 16 },
  { id: "maxi-karisik-izgara", cat: "Grillades", name: "14 · Maxi Karışık Izgara (par personne)", price: 24 },

  // Grillades aux sauces
  { id: "yogurtlu-adana", cat: "Grillades aux Sauces", name: "15 · Yoğurtlu Adana Kebab", price: 19 },
  { id: "ali-nazik", cat: "Grillades aux Sauces", name: "16 · Ali Nazik", price: 19.5 },
  { id: "yogurtlu-sis", cat: "Grillades aux Sauces", name: "17 · Yoğurtlu Şiş", price: 19.5 },
  { id: "sote", cat: "Grillades aux Sauces", name: "18 · Sote", price: 19, image: "/media/sote.png" },
  { id: "alti-ezmeli-sis", cat: "Grillades aux Sauces", name: "19 · Altı Ezmeli Şiş", price: 19.5 },
  { id: "sac-kavurma", cat: "Grillades aux Sauces", name: "20 · Saç Kavurma", price: 19.5 },
  { id: "beyti-sarma", cat: "Grillades aux Sauces", name: "21 · Beyti Sarma", price: 19.5 },
  { id: "antrikot", cat: "Grillades aux Sauces", name: "22 · Antrikot", price: 24.5 },
  { id: "cote-de-boeuf", cat: "Grillades aux Sauces", name: "23 · Côte de Bœuf", price: 47 },

  // Pide
  { id: "karisik-pide", cat: "Pide", name: "24 · Karışık Pide", price: 12.5, image: "/media/pide.png" },
  { id: "kiymali", cat: "Pide", name: "25 · Kıymalı", price: 10 },
  { id: "kusbasili-peynirli", cat: "Pide", name: "26 · Kuşbaşılı-Peynirli", price: 11 },
  { id: "pastirmali-kasarli", cat: "Pide", name: "27 · Pastırmalı-Kaşarlı", price: 11 },
  { id: "peynirli", cat: "Pide", name: "28 · Peynirli", price: 10 },
  { id: "sucuklu-kasarli", cat: "Pide", name: "29 · Sucuklu-Kaşarlı", price: 11 },
  { id: "pide-vege", cat: "Pide", name: "30 · Pide Végé", price: 9.5 },

  // Poissons
  { id: "levrek-izgara", cat: "Poissons", name: "31 · Levrek Izgara", price: 21 },
  { id: "cupra-izgara", cat: "Poissons", name: "32 · Çupra Izgara", price: 21 },

  // Desserts
  { id: "baklava", cat: "Desserts", name: "Baklava (3 pièces)", price: 6.5 },
  { id: "balli-yogurt", cat: "Desserts", name: "Ballı Yoğurt", price: 5 },
  { id: "lokum", cat: "Desserts", name: "Lokum (7 pièces)", price: 5 },
  { id: "sutlac", cat: "Desserts", name: "Sütlaç", price: 5 },
  { id: "kunefe", cat: "Desserts", name: "Künefe (15 min de prép.)", price: 8, image: "/media/kunefe.png" },
  { id: "kunefe-glace", cat: "Desserts", name: "Künefe avec glace", price: 9 }
];
