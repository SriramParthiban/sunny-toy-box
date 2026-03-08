export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  brand: string;
  sku: string;
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  inStock: boolean;
  gender: 'Boys' | 'Girls' | 'Unisex';
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Helper to generate placeholder image URLs
const img = (seed: string) => `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}&backgroundColor=ffd700,fff8dc,ffe0b2`;

export const products: Product[] = [
  // 0-5 Years
  {
    id: "TOY001", name: "Cuddly Teddy Bear", description: "Super soft and huggable teddy bear made from premium plush material. Perfect companion for your little one's bedtime and playtime adventures.",
    price: 799, originalPrice: 1299, discount: 38, category: "Soft Toys", ageRange: "0-5 years", minAge: 0, maxAge: 5,
    images: [img("teddy1"), img("teddy2"), img("teddy3")], rating: 4.8, reviewCount: 234, stock: 120, brand: "CuddlePals",
    sku: "ST-001", features: ["Ultra-soft plush", "Hypoallergenic", "Machine washable", "30cm height", "Safety certified"],
    specifications: { dimensions: "30 x 20 x 15 cm", weight: "250g", material: "Premium Plush", color: "Brown" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY002", name: "Rainbow Stacking Rings", description: "Colorful stacking rings that help develop hand-eye coordination and color recognition. A timeless classic for babies and toddlers.",
    price: 399, originalPrice: 599, discount: 33, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [img("rings1"), img("rings2"), img("rings3")], rating: 4.6, reviewCount: 189, stock: 200, brand: "LearnPlay",
    sku: "ED-001", features: ["6 colorful rings", "BPA-free plastic", "Develops motor skills", "Color recognition", "Safe for teething"],
    specifications: { dimensions: "15 x 15 x 25 cm", weight: "300g", material: "BPA-free Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY003", name: "Musical Activity Table", description: "Interactive activity table with lights, sounds, and multiple play areas. Encourages standing and walking for toddlers.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Musical", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [img("table1"), img("table2"), img("table3")], rating: 4.7, reviewCount: 156, stock: 45, brand: "MelodyKids",
    sku: "MU-001", features: ["12 musical tunes", "LED lights", "Detachable legs", "Volume control", "Auto-off timer"],
    specifications: { dimensions: "40 x 40 x 35 cm", weight: "1.2kg", material: "ABS Plastic", batteryType: "3x AA" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY004", name: "Shape Sorter Cube", description: "Classic shape sorting cube with 12 different shapes. Great for developing problem-solving skills and shape recognition.",
    price: 599, originalPrice: 899, discount: 33, category: "Educational", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [img("cube1"), img("cube2"), img("cube3")], rating: 4.5, reviewCount: 98, stock: 150, brand: "SmartKids",
    sku: "ED-002", features: ["12 shapes", "Non-toxic paint", "Smooth edges", "Sturdy wood", "Storage box"],
    specifications: { dimensions: "15 x 15 x 15 cm", weight: "500g", material: "Natural Wood", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY005", name: "Baby Doll with Accessories", description: "Adorable baby doll with feeding bottle, pacifier, and outfit. Perfect for nurturing play and imagination.",
    price: 899, originalPrice: 1499, discount: 40, category: "Dolls", ageRange: "0-5 years", minAge: 2, maxAge: 5,
    images: [img("doll1"), img("doll2"), img("doll3")], rating: 4.4, reviewCount: 167, stock: 80, brand: "DollWorld",
    sku: "DL-001", features: ["Soft body", "Closing eyes", "Includes bottle & pacifier", "Removable clothes", "35cm tall"],
    specifications: { dimensions: "35 x 15 x 10 cm", weight: "400g", material: "Vinyl & Cloth", color: "Pink" },
    tags: ["featured"], inStock: true, gender: "Girls"
  },
  {
    id: "TOY006", name: "Rubber Duck Bath Set", description: "Set of 6 colorful rubber ducks for bath time fun. Each duck squeaks and floats, making bath time enjoyable.",
    price: 349, originalPrice: 499, discount: 30, category: "Bath Toys", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [img("duck1"), img("duck2"), img("duck3")], rating: 4.3, reviewCount: 312, stock: 300, brand: "SplashFun",
    sku: "BT-001", features: ["6 ducks", "Squeaky", "BPA-free", "Bright colors", "Floats on water"],
    specifications: { dimensions: "8 x 8 x 7 cm each", weight: "180g total", material: "Safe Rubber", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY007", name: "Mega Building Blocks Set", description: "Large building blocks perfect for tiny hands. 60 pieces in vibrant colors to build towers, houses, and more.",
    price: 1299, originalPrice: 1999, discount: 35, category: "Building Blocks", ageRange: "0-5 years", minAge: 1, maxAge: 5,
    images: [img("blocks1"), img("blocks2"), img("blocks3")], rating: 4.7, reviewCount: 203, stock: 90, brand: "BlockBuddies",
    sku: "BB-001", features: ["60 large pieces", "Easy grip", "BPA-free", "Storage bag included", "Compatible with major brands"],
    specifications: { dimensions: "Various", weight: "1.5kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  // 5-10 Years
  {
    id: "TOY008", name: "Remote Control Racing Car", description: "High-speed RC car with LED lights and rechargeable battery. Features 2.4GHz remote for interference-free racing action.",
    price: 2499, originalPrice: 3999, discount: 38, category: "Vehicles", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [img("rccar1"), img("rccar2"), img("rccar3")], rating: 4.5, reviewCount: 127, stock: 45, brand: "SpeedKing",
    sku: "RC-001", features: ["2.4GHz Remote", "LED Lights", "Rechargeable Battery", "30km/h speed", "Shock absorbers"],
    specifications: { dimensions: "25 x 12 x 8 cm", weight: "450g", material: "ABS Plastic", batteryType: "Li-ion", color: "Red" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Boys"
  },
  {
    id: "TOY009", name: "Detective Board Game", description: "Exciting mystery-solving board game for the whole family. Solve clues, find suspects, and crack the case!",
    price: 1299, originalPrice: 1799, discount: 28, category: "Board Games", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [img("board1"), img("board2"), img("board3")], rating: 4.6, reviewCount: 89, stock: 60, brand: "GameMasters",
    sku: "BG-001", features: ["2-6 players", "45 min play time", "100+ clue cards", "Replayable", "Family friendly"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "800g", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY010", name: "Science Experiment Kit", description: "Complete science lab with 50+ experiments. Learn chemistry, physics, and biology through fun hands-on activities.",
    price: 1999, originalPrice: 2999, discount: 33, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 10,
    images: [img("science1"), img("science2"), img("science3")], rating: 4.8, reviewCount: 245, stock: 35, brand: "ScienceWhiz",
    sku: "SC-001", features: ["50+ experiments", "Safety goggles included", "Instruction manual", "Non-toxic chemicals", "Lab coat included"],
    specifications: { dimensions: "35 x 25 x 10 cm", weight: "1.2kg", material: "Various", color: "Blue/White" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY011", name: "Art & Craft Supply Box", description: "Ultimate art supply box with 150+ items including paints, brushes, markers, colored pencils, and craft supplies.",
    price: 899, originalPrice: 1499, discount: 40, category: "Arts & Crafts", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [img("art1"), img("art2"), img("art3")], rating: 4.4, reviewCount: 178, stock: 100, brand: "ArtStar",
    sku: "AC-001", features: ["150+ items", "Non-toxic colors", "Wooden case", "Drawing pad included", "Sharpener included"],
    specifications: { dimensions: "40 x 30 x 5 cm", weight: "900g", material: "Various", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY012", name: "Superhero Action Figure Set", description: "Set of 5 superhero action figures with movable joints and accessories. Each figure stands 15cm tall.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Action Figures", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [img("hero1"), img("hero2"), img("hero3")], rating: 4.3, reviewCount: 156, stock: 70, brand: "HeroZone",
    sku: "AF-001", features: ["5 figures", "Movable joints", "Accessories included", "Display stands", "Collector card"],
    specifications: { dimensions: "15 cm each", weight: "600g total", material: "PVC", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Boys"
  },
  {
    id: "TOY013", name: "Princess Doll House", description: "Beautiful 3-story doll house with furniture and dolls. Features opening doors, windows, and a rooftop garden.",
    price: 3999, originalPrice: 5999, discount: 33, category: "Dolls", ageRange: "5-10 years", minAge: 4, maxAge: 9,
    images: [img("house1"), img("house2"), img("house3")], rating: 4.7, reviewCount: 134, stock: 25, brand: "DreamHouse",
    sku: "DL-002", features: ["3 stories", "Furniture included", "2 dolls included", "Opening doors", "Rooftop garden"],
    specifications: { dimensions: "60 x 40 x 80 cm", weight: "3.5kg", material: "Wood & Plastic", color: "Pink/White" },
    tags: ["featured"], inStock: true, gender: "Girls"
  },
  {
    id: "TOY014", name: "Cricket Set for Kids", description: "Complete cricket set with bat, ball, stumps, and carrying bag. Perfect for backyard and park cricket.",
    price: 1299, originalPrice: 1899, discount: 32, category: "Outdoor", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [img("cricket1"), img("cricket2"), img("cricket3")], rating: 4.2, reviewCount: 87, stock: 55, brand: "SportStar",
    sku: "SP-001", features: ["Size 3 bat", "Tennis ball", "Plastic stumps", "Carry bag", "Lightweight"],
    specifications: { dimensions: "65 cm bat", weight: "1.8kg total", material: "Willow Wood & Plastic", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY015", name: "Keyboard Piano with Mic", description: "37-key electronic keyboard with microphone and stand. Includes 8 rhythms, 4 drum sounds, and record/playback.",
    price: 1799, originalPrice: 2799, discount: 36, category: "Musical", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [img("piano1"), img("piano2"), img("piano3")], rating: 4.5, reviewCount: 112, stock: 40, brand: "MelodyKids",
    sku: "MU-002", features: ["37 keys", "Microphone included", "8 rhythms", "Record/playback", "Volume control"],
    specifications: { dimensions: "54 x 17 x 5 cm", weight: "1.1kg", material: "ABS Plastic", batteryType: "4x AA", color: "Black/Pink" },
    tags: [], inStock: true, gender: "Unisex"
  },
  // 10-15 Years
  {
    id: "TOY016", name: "Advanced Robotics Kit", description: "Build and program your own robot! Includes 300+ parts, motors, sensors, and a beginner-friendly coding app.",
    price: 5999, originalPrice: 8999, discount: 33, category: "Robots", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [img("robot1"), img("robot2"), img("robot3")], rating: 4.9, reviewCount: 89, stock: 20, brand: "RoboGenius",
    sku: "RB-001", features: ["300+ parts", "App-controlled", "10 robot designs", "STEM learning", "Rechargeable motors"],
    specifications: { dimensions: "40 x 30 x 10 cm (box)", weight: "2.5kg", material: "ABS Plastic & Metal", batteryType: "Rechargeable" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY017", name: "Strategy War Board Game", description: "Epic strategy board game where you conquer territories and build empires. 2-4 players, intense gameplay.",
    price: 2499, originalPrice: 3499, discount: 29, category: "Board Games", ageRange: "10-15 years", minAge: 10, maxAge: 16,
    images: [img("war1"), img("war2"), img("war3")], rating: 4.7, reviewCount: 67, stock: 40, brand: "GameMasters",
    sku: "BG-002", features: ["2-4 players", "90 min play", "Detailed map", "500+ pieces", "Strategy guide"],
    specifications: { dimensions: "40 x 40 x 10 cm", weight: "1.5kg", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY018", name: "Architecture Building Set", description: "1500+ piece architectural building set. Build famous world landmarks with detailed instructions and display stands.",
    price: 4999, originalPrice: 7499, discount: 33, category: "Building Blocks", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [img("arch1"), img("arch2"), img("arch3")], rating: 4.8, reviewCount: 134, stock: 30, brand: "BlockMaster",
    sku: "BB-002", features: ["1500+ pieces", "5 landmark designs", "Display stands", "Detailed instructions", "Premium quality"],
    specifications: { dimensions: "Various builds", weight: "2kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY019", name: "RC Racing Drone", description: "High-performance racing drone with HD camera. Features auto-hover, headless mode, and 15-minute flight time.",
    price: 4499, originalPrice: 6999, discount: 36, category: "Electronic", ageRange: "10-15 years", minAge: 12, maxAge: 18,
    images: [img("drone1"), img("drone2"), img("drone3")], rating: 4.4, reviewCount: 78, stock: 15, brand: "SkyFlyer",
    sku: "EL-001", features: ["HD Camera", "Auto-hover", "Headless mode", "15min flight", "Extra batteries"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "350g", material: "Carbon Fiber & Plastic", batteryType: "Li-Po" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY020", name: "Coding Learning Kit", description: "Learn programming with this hands-on kit. Build circuits, write code, and create interactive projects.",
    price: 3499, originalPrice: 4999, discount: 30, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [img("code1"), img("code2"), img("code3")], rating: 4.6, reviewCount: 56, stock: 25, brand: "CodeKids",
    sku: "ED-003", features: ["20 projects", "Arduino-based", "LED & sensors", "Online tutorials", "Beginner friendly"],
    specifications: { dimensions: "25 x 20 x 8 cm", weight: "800g", material: "Electronic Components", color: "Blue/Green" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY021", name: "Professional Art Easel Set", description: "Adjustable wooden art easel with complete painting supplies. Includes canvases, acrylic paints, and brushes.",
    price: 2999, originalPrice: 4499, discount: 33, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [img("easel1"), img("easel2"), img("easel3")], rating: 4.5, reviewCount: 45, stock: 20, brand: "ArtStar",
    sku: "AC-002", features: ["Adjustable height", "3 canvases", "24 acrylic paints", "10 brushes", "Palette included"],
    specifications: { dimensions: "60 x 40 x 150 cm", weight: "3kg", material: "Beech Wood", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY022", name: "Acoustic Guitar Starter Pack", description: "Full-size acoustic guitar with tuner, picks, strap, and beginner lesson book. Perfect for aspiring musicians.",
    price: 4999, originalPrice: 7999, discount: 38, category: "Musical", ageRange: "10-15 years", minAge: 10, maxAge: 18,
    images: [img("guitar1"), img("guitar2"), img("guitar3")], rating: 4.3, reviewCount: 92, stock: 15, brand: "TuneUp",
    sku: "MU-003", features: ["Full-size", "Steel strings", "Tuner included", "Carry bag", "Lesson book"],
    specifications: { dimensions: "100 x 38 x 12 cm", weight: "2.2kg", material: "Basswood & Spruce", color: "Natural/Sunburst" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  // 15-18 Years
  {
    id: "TOY023", name: "Collector's Anime Figure", description: "Premium detailed anime figure with dynamic pose and base. Hand-painted with high-quality materials.",
    price: 3999, originalPrice: 5499, discount: 27, category: "Action Figures", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [img("anime1"), img("anime2"), img("anime3")], rating: 4.8, reviewCount: 67, stock: 10, brand: "FigureArts",
    sku: "AF-002", features: ["25cm tall", "Hand-painted", "Display base", "Collector box", "Certificate"],
    specifications: { dimensions: "25 x 15 x 15 cm", weight: "500g", material: "PVC & ABS", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY024", name: "3D Metal Puzzle - Spaceship", description: "Intricate 3D metal puzzle of a sci-fi spaceship. 200+ pieces that snap together without glue.",
    price: 1299, originalPrice: 1799, discount: 28, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [img("puzzle1"), img("puzzle2"), img("puzzle3")], rating: 4.6, reviewCount: 43, stock: 50, brand: "MetalCraft",
    sku: "PZ-001", features: ["200+ pieces", "No glue needed", "Metal sheets", "Display stand", "Detailed instructions"],
    specifications: { dimensions: "20 x 15 x 10 cm (assembled)", weight: "300g", material: "Stainless Steel", color: "Silver" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY025", name: "Smart Watch for Teens", description: "Feature-packed smart watch with fitness tracking, music control, and notifications. Stylish and water-resistant.",
    price: 3499, originalPrice: 4999, discount: 30, category: "Electronic", ageRange: "15-18 years", minAge: 13, maxAge: 18,
    images: [img("watch1"), img("watch2"), img("watch3")], rating: 4.4, reviewCount: 189, stock: 40, brand: "TechGear",
    sku: "EL-002", features: ["Heart rate monitor", "Step counter", "Water resistant", "7-day battery", "Bluetooth"],
    specifications: { dimensions: "4.4 x 3.8 x 1.2 cm", weight: "45g", material: "Aluminum & Silicone", color: "Black" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY026", name: "Pro Sketch Pad & Pencil Set", description: "Professional-grade sketching set with 50 graphite pencils, charcoal sticks, and premium sketch pad.",
    price: 1999, originalPrice: 2999, discount: 33, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [img("sketch1"), img("sketch2"), img("sketch3")], rating: 4.7, reviewCount: 78, stock: 35, brand: "ArtPro",
    sku: "AC-003", features: ["50 pencils", "Charcoal set", "A3 sketch pad", "Eraser & blender", "Carry case"],
    specifications: { dimensions: "35 x 25 x 5 cm", weight: "1.2kg", material: "Graphite & Paper", color: "Black" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY027", name: "Advanced STEM Robot Kit", description: "Build 12 different robots with this advanced STEM kit. Features solar and battery power options.",
    price: 7999, originalPrice: 11999, discount: 33, category: "Robots", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [img("stembot1"), img("stembot2"), img("stembot3")], rating: 4.9, reviewCount: 34, stock: 10, brand: "RoboGenius",
    sku: "RB-002", features: ["12 robot designs", "Solar powered option", "Advanced coding", "Metal parts", "Competition ready"],
    specifications: { dimensions: "50 x 35 x 15 cm (box)", weight: "3.5kg", material: "Metal & Plastic", batteryType: "Solar/Li-ion" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY028", name: "Mechanical Puzzle Box", description: "Handcrafted wooden puzzle box with secret compartments. Solve mechanical puzzles to open each layer.",
    price: 2499, originalPrice: 3499, discount: 29, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [img("mech1"), img("mech2"), img("mech3")], rating: 4.5, reviewCount: 56, stock: 20, brand: "WoodCraft",
    sku: "PZ-002", features: ["5 layers", "Handcrafted", "Secret compartments", "Premium wood", "Gift box"],
    specifications: { dimensions: "12 x 12 x 12 cm", weight: "800g", material: "Walnut Wood", color: "Dark Brown" },
    tags: [], inStock: true, gender: "Unisex"
  },
  // Extra popular items
  {
    id: "TOY029", name: "Dinosaur World Play Set", description: "Complete dinosaur play set with 12 realistic dinosaur figures, trees, rocks, and a play mat with prehistoric landscape.",
    price: 1699, originalPrice: 2499, discount: 32, category: "Action Figures", ageRange: "5-10 years", minAge: 3, maxAge: 8,
    images: [img("dino1"), img("dino2"), img("dino3")], rating: 4.6, reviewCount: 201, stock: 65, brand: "DinoLand",
    sku: "AF-003", features: ["12 dinosaurs", "Play mat", "Trees & rocks", "Info cards", "Storage box"],
    specifications: { dimensions: "Various sizes", weight: "1.5kg", material: "PVC & Rubber", color: "Multicolor" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY030", name: "Magic Kit for Beginners", description: "Learn 50+ magic tricks with this complete magic kit. Includes props, instruction booklet, and online tutorial access.",
    price: 999, originalPrice: 1599, discount: 38, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [img("magic1"), img("magic2"), img("magic3")], rating: 4.3, reviewCount: 145, stock: 55, brand: "MagicPro",
    sku: "ED-004", features: ["50+ tricks", "Video tutorials", "Props included", "Beginner friendly", "Performance cape"],
    specifications: { dimensions: "30 x 25 x 8 cm", weight: "700g", material: "Various", color: "Black/Red" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY031", name: "Wooden Train Set", description: "Classic wooden train set with tracks, bridges, and buildings. 80+ pieces for endless creative play.",
    price: 2299, originalPrice: 3499, discount: 34, category: "Vehicles", ageRange: "0-5 years", minAge: 2, maxAge: 6,
    images: [img("train1"), img("train2"), img("train3")], rating: 4.8, reviewCount: 178, stock: 30, brand: "TrainTown",
    sku: "VH-001", features: ["80+ pieces", "Real wood", "Bridges & tunnels", "Compatible with major brands", "Storage box"],
    specifications: { dimensions: "Various", weight: "2.8kg", material: "Beech Wood", color: "Natural/Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY032", name: "Telescope for Kids", description: "Beginner telescope with 90x magnification. See the moon, planets, and stars. Includes star map and phone adapter.",
    price: 3999, originalPrice: 5999, discount: 33, category: "Educational", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [img("scope1"), img("scope2"), img("scope3")], rating: 4.5, reviewCount: 67, stock: 20, brand: "StarGazer",
    sku: "ED-005", features: ["90x magnification", "Tripod included", "Star map", "Phone adapter", "Carry case"],
    specifications: { dimensions: "45 x 10 x 10 cm", weight: "1.8kg", material: "Aluminum & Glass", color: "Silver/Black" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
];

export const reviews: Review[] = [
  { id: "R001", productId: "TOY001", userName: "Priya S.", rating: 5, comment: "My daughter loves this teddy! So soft and cuddly. Perfect gift.", date: "2026-02-15" },
  { id: "R002", productId: "TOY001", userName: "Rahul K.", rating: 5, comment: "Excellent quality. My son carries it everywhere.", date: "2026-02-10" },
  { id: "R003", productId: "TOY001", userName: "Ananya M.", rating: 4, comment: "Very cute and well-made. Slightly smaller than expected.", date: "2026-01-28" },
  { id: "R004", productId: "TOY008", userName: "Vikram R.", rating: 5, comment: "Amazing RC car! Fast and durable. My kid is thrilled.", date: "2026-03-01" },
  { id: "R005", productId: "TOY008", userName: "Deepak P.", rating: 4, comment: "Great speed and control. Battery life could be better.", date: "2026-02-20" },
  { id: "R006", productId: "TOY010", userName: "Meera T.", rating: 5, comment: "Best science kit ever! My daughter did all 50 experiments.", date: "2026-02-25" },
  { id: "R007", productId: "TOY010", userName: "Suresh N.", rating: 5, comment: "Educational and fun. Kids love doing experiments.", date: "2026-02-18" },
  { id: "R008", productId: "TOY016", userName: "Arjun D.", rating: 5, comment: "Incredible robotics kit. My son learned so much!", date: "2026-03-05" },
  { id: "R009", productId: "TOY016", userName: "Kavitha L.", rating: 5, comment: "Worth every rupee. The app makes coding so easy.", date: "2026-02-28" },
  { id: "R010", productId: "TOY018", userName: "Ravi G.", rating: 5, comment: "Beautiful builds. The Taj Mahal model is stunning!", date: "2026-03-03" },
  { id: "R011", productId: "TOY013", userName: "Sneha B.", rating: 5, comment: "My daughter's dream come true! Beautiful doll house.", date: "2026-02-12" },
  { id: "R012", productId: "TOY025", userName: "Aditya V.", rating: 4, comment: "Great smart watch for teens. Good features for the price.", date: "2026-03-06" },
  { id: "R013", productId: "TOY029", userName: "Pooja H.", rating: 5, comment: "Dinosaurs look so realistic! Kids play with them daily.", date: "2026-02-22" },
  { id: "R014", productId: "TOY031", userName: "Karthik S.", rating: 5, comment: "Classic toy, beautifully made. Hours of creative play.", date: "2026-01-30" },
  { id: "R015", productId: "TOY007", userName: "Lakshmi R.", rating: 4, comment: "Great blocks, perfect size for toddler hands.", date: "2026-02-05" },
];

export const categories = [
  "Action Figures", "Dolls", "Educational", "Electronic", "Board Games",
  "Outdoor", "Arts & Crafts", "Building Blocks", "Vehicles", "Soft Toys",
  "Robots", "Musical", "Bath Toys", "Puzzles"
];

export const brands = [
  "CuddlePals", "LearnPlay", "MelodyKids", "SmartKids", "DollWorld",
  "SplashFun", "BlockBuddies", "SpeedKing", "GameMasters", "ScienceWhiz",
  "ArtStar", "HeroZone", "DreamHouse", "SportStar", "RoboGenius",
  "BlockMaster", "SkyFlyer", "CodeKids", "TuneUp", "FigureArts",
  "MetalCraft", "TechGear", "ArtPro", "WoodCraft", "DinoLand",
  "MagicPro", "TrainTown", "StarGazer"
];

export const ageRanges = [
  { label: "0-5 years", min: 0, max: 5 },
  { label: "5-10 years", min: 5, max: 10 },
  { label: "10-15 years", min: 10, max: 15 },
  { label: "15-18 years", min: 15, max: 18 },
];

export const priceRanges = [
  { label: "₹200 - ₹500", min: 200, max: 500 },
  { label: "₹500 - ₹1,000", min: 500, max: 1000 },
  { label: "₹1,000 - ₹2,500", min: 1000, max: 2500 },
  { label: "₹2,500 - ₹5,000", min: 2500, max: 5000 },
  { label: "₹5,000 - ₹15,000", min: 5000, max: 15000 },
];
