import teddyBear from '@/assets/products/teddy-bear.png';
import stackingRings from '@/assets/products/stacking-rings.png';
import activityTable from '@/assets/products/activity-table.png';
import shapeSorter from '@/assets/products/shape-sorter.png';
import babyDoll from '@/assets/products/baby-doll.png';
import bathDucks from '@/assets/products/bath-ducks.png';
import buildingBlocks from '@/assets/products/building-blocks.png';
import rcCar from '@/assets/products/rc-car.png';
import boardGame from '@/assets/products/board-game.png';
import scienceKit from '@/assets/products/science-kit.png';
import artKit from '@/assets/products/art-kit.png';
import actionFigures from '@/assets/products/action-figures.png';
import dollHouse from '@/assets/products/doll-house.png';
import cricketSet from '@/assets/products/cricket-set.png';
import keyboardPiano from '@/assets/products/keyboard-piano.png';
import roboticsKit from '@/assets/products/robotics-kit.png';
import strategyGame from '@/assets/products/strategy-game.png';
import architectureSet from '@/assets/products/architecture-set.png';
import drone from '@/assets/products/drone.png';
import codingKit from '@/assets/products/coding-kit.png';
import artEasel from '@/assets/products/art-easel.png';
import guitar from '@/assets/products/guitar.png';
import animeFigure from '@/assets/products/anime-figure.png';
import metalPuzzle from '@/assets/products/metal-puzzle.png';
import smartWatch from '@/assets/products/smart-watch.png';
import sketchSet from '@/assets/products/sketch-set.png';
import stemRobot from '@/assets/products/stem-robot.png';
import puzzleBox from '@/assets/products/puzzle-box.png';
import dinosaurSet from '@/assets/products/dinosaur-set.png';
import magicKit from '@/assets/products/magic-kit.png';
import trainSet from '@/assets/products/train-set.png';
import telescope from '@/assets/products/telescope.png';
import elephantPlush from '@/assets/products/elephant-plush.png';
import rattleSet from '@/assets/products/rattle-set.png';
import pullDuck from '@/assets/products/pull-duck.png';

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
  theme?: string;
  badge?: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  // ===== 0-5 YEARS (10 products) =====
  {
    id: "TOY001", name: "Cuddly Teddy Bear", description: "Super soft and huggable teddy bear made from premium plush material. Your little one's perfect cuddle companion for bedtime and playtime adventures. Hypoallergenic and machine washable.",
    price: 599, originalPrice: 999, discount: 40, category: "Soft Toys", ageRange: "0-5 years", minAge: 0, maxAge: 5,
    images: [teddyBear], rating: 4.8, reviewCount: 342, stock: 120, brand: "CuddlePals",
    sku: "ST-001", features: ["Ultra-soft premium plush", "Hypoallergenic filling", "Machine washable", "30cm height", "BIS safety certified"],
    specifications: { dimensions: "30 x 20 x 15 cm", weight: "250g", material: "Premium Plush", color: "Golden Brown" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex", theme: "Classic"
  },
  {
    id: "TOY002", name: "Rainbow Stacking Rings", description: "Colorful stacking rings that help develop hand-eye coordination and color recognition. A timeless classic loved by generations of babies and toddlers.",
    price: 349, originalPrice: 549, discount: 36, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [stackingRings], rating: 4.6, reviewCount: 218, stock: 200, brand: "LearnPlay",
    sku: "ED-001", features: ["6 colorful rings", "BPA-free plastic", "Develops motor skills", "Color recognition", "Safe for teething"],
    specifications: { dimensions: "15 x 15 x 25 cm", weight: "300g", material: "BPA-free Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY003", name: "Musical Activity Table", description: "Interactive activity table with lights, sounds, and multiple play areas. Encourages standing and walking for toddlers with 12 musical tunes.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Musical", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [activityTable], rating: 4.7, reviewCount: 189, stock: 45, brand: "MelodyKids",
    sku: "MU-001", features: ["12 musical tunes", "LED lights", "Detachable legs", "Volume control", "Auto-off timer"],
    specifications: { dimensions: "40 x 40 x 35 cm", weight: "1.2kg", material: "ABS Plastic", batteryType: "3x AA" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY004", name: "Wooden Shape Sorter Cube", description: "Classic wooden shape sorting cube with 12 different shapes. Develops problem-solving skills and shape recognition with non-toxic paint.",
    price: 499, originalPrice: 799, discount: 38, category: "Educational", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [shapeSorter], rating: 4.5, reviewCount: 156, stock: 150, brand: "SmartKids",
    sku: "ED-002", features: ["12 shapes", "Non-toxic paint", "Smooth edges", "Natural beech wood", "Storage box"],
    specifications: { dimensions: "15 x 15 x 15 cm", weight: "500g", material: "Natural Wood", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY005", name: "Baby Doll with Accessories", description: "Adorable baby doll with feeding bottle, pacifier, and pink outfit. Perfect for nurturing play and developing empathy in toddlers.",
    price: 799, originalPrice: 1399, discount: 43, category: "Dolls", ageRange: "0-5 years", minAge: 2, maxAge: 5,
    images: [babyDoll], rating: 4.4, reviewCount: 198, stock: 80, brand: "DollWorld",
    sku: "DL-001", features: ["Soft body", "Closing eyes", "Includes bottle & pacifier", "Removable clothes", "35cm tall"],
    specifications: { dimensions: "35 x 15 x 10 cm", weight: "400g", material: "Vinyl & Cloth", color: "Pink" },
    tags: ["featured"], inStock: true, gender: "Girls"
  },
  {
    id: "TOY006", name: "Rubber Duck Bath Set", description: "Set of 6 colorful rubber ducks for bath time fun. Each duck squeaks and floats, making bath time a delightful experience!",
    price: 249, originalPrice: 449, discount: 45, category: "Bath Toys", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [bathDucks], rating: 4.3, reviewCount: 312, stock: 300, brand: "SplashFun",
    sku: "BT-001", features: ["6 colorful ducks", "Squeaky sound", "BPA-free material", "Bright colors", "Floats on water"],
    specifications: { dimensions: "8 x 8 x 7 cm each", weight: "180g total", material: "Safe Rubber", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex", badge: "Value Pack"
  },
  {
    id: "TOY007", name: "Mega Building Blocks - 60 Pcs", description: "Large building blocks perfect for tiny hands. 60 pieces in vibrant colors to build towers, houses, and let imagination run wild!",
    price: 999, originalPrice: 1799, discount: 44, category: "Building Blocks", ageRange: "0-5 years", minAge: 1, maxAge: 5,
    images: [buildingBlocks], rating: 4.7, reviewCount: 267, stock: 90, brand: "BlockBuddies",
    sku: "BB-001", features: ["60 large pieces", "Easy grip for toddlers", "BPA-free", "Storage bag included", "Compatible with major brands"],
    specifications: { dimensions: "Various", weight: "1.5kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY033", name: "Rainbow Elephant Plush", description: "Colorful patchwork elephant plush toy, incredibly soft and perfect for cuddling. A beautiful addition to any nursery.",
    price: 699, originalPrice: 1199, discount: 42, category: "Soft Toys", ageRange: "0-5 years", minAge: 0, maxAge: 5,
    images: [elephantPlush], rating: 4.6, reviewCount: 145, stock: 75, brand: "CuddlePals",
    sku: "ST-002", features: ["Ultra-soft material", "Rainbow patchwork design", "25cm tall", "Machine washable", "Hypoallergenic"],
    specifications: { dimensions: "25 x 18 x 15 cm", weight: "200g", material: "Premium Plush", color: "Rainbow" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY034", name: "Baby Rattle & Teether Set", description: "Set of 5 colorful rattles and teethers perfect for newborns. Multiple textures and shapes for sensory development.",
    price: 399, originalPrice: 699, discount: 43, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 2,
    images: [rattleSet], rating: 4.5, reviewCount: 234, stock: 180, brand: "BabyJoy",
    sku: "BT-002", features: ["5-piece set", "BPA-free", "Multiple textures", "Easy grip handles", "Bright colors"],
    specifications: { dimensions: "Various", weight: "220g total", material: "Food-grade Silicone", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY035", name: "Pull-Along Quacky Duck", description: "Adorable wooden duck on wheels that waddles when pulled! Classic pull toy that encourages walking and active play.",
    price: 449, originalPrice: 749, discount: 40, category: "Vehicles", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [pullDuck], rating: 4.4, reviewCount: 112, stock: 65, brand: "WoodCraft",
    sku: "VH-002", features: ["Natural beech wood", "Non-toxic paint", "Waddles when pulled", "Smooth wheels", "Classic design"],
    specifications: { dimensions: "20 x 12 x 18 cm", weight: "350g", material: "Beech Wood", color: "Yellow" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },

  // ===== 5-10 YEARS (15 products) =====
  {
    id: "TOY008", name: "RC Racing Car - SpeedKing", description: "High-speed RC car with LED headlights and rechargeable battery. Features 2.4GHz remote for interference-free racing at 30km/h!",
    price: 1999, originalPrice: 3499, discount: 43, category: "Vehicles", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [rcCar], rating: 4.5, reviewCount: 189, stock: 45, brand: "SpeedKing",
    sku: "RC-001", features: ["2.4GHz Remote Control", "LED Headlights", "Rechargeable Li-ion Battery", "30km/h top speed", "Shock absorbers"],
    specifications: { dimensions: "25 x 12 x 8 cm", weight: "450g", material: "ABS Plastic", batteryType: "Li-ion Rechargeable", color: "Red" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Boys", theme: "Racing"
  },
  {
    id: "TOY009", name: "Detective Mystery Board Game", description: "Exciting mystery-solving board game for the whole family! Solve clues, interrogate suspects, and crack the case. 100+ unique clue cards for endless fun.",
    price: 1099, originalPrice: 1599, discount: 31, category: "Board Games", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [boardGame], rating: 4.6, reviewCount: 134, stock: 60, brand: "GameMasters",
    sku: "BG-001", features: ["2-6 players", "45 min play time", "100+ clue cards", "Highly replayable", "Family friendly"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "800g", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY010", name: "Science Experiment Lab Kit", description: "Complete science lab with 50+ experiments! Learn chemistry, physics, and biology through fun hands-on activities with safety goggles and lab coat included.",
    price: 1699, originalPrice: 2799, discount: 39, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 10,
    images: [scienceKit], rating: 4.8, reviewCount: 312, stock: 35, brand: "ScienceWhiz",
    sku: "SC-001", features: ["50+ experiments", "Safety goggles included", "Step-by-step manual", "Non-toxic chemicals", "Lab coat included"],
    specifications: { dimensions: "35 x 25 x 10 cm", weight: "1.2kg", material: "Various", color: "Blue/White" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY011", name: "Deluxe Art & Craft Box - 150 Pcs", description: "Ultimate art supply box with 150+ items! Includes watercolors, sketch pens, colored pencils, oil pastels, and craft supplies in a premium wooden case.",
    price: 799, originalPrice: 1399, discount: 43, category: "Arts & Crafts", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [artKit], rating: 4.4, reviewCount: 223, stock: 100, brand: "ArtStar",
    sku: "AC-001", features: ["150+ items", "Non-toxic colors", "Premium wooden case", "Drawing pad included", "Complete art set"],
    specifications: { dimensions: "40 x 30 x 5 cm", weight: "900g", material: "Various", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY012", name: "Superhero Action Figure Set", description: "Set of 5 superhero action figures with movable joints, accessories, and collector cards. Each figure stands 15cm tall with dynamic poses.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Action Figures", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [actionFigures], rating: 4.3, reviewCount: 178, stock: 70, brand: "HeroZone",
    sku: "AF-001", features: ["5 figures included", "20+ movable joints", "Accessories & weapons", "Display stands", "Collector cards"],
    specifications: { dimensions: "15 cm each", weight: "600g total", material: "PVC", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Boys", theme: "Superheroes"
  },
  {
    id: "TOY013", name: "Princess Dream Doll House", description: "Beautiful 3-story doll house with furniture and dolls! Features opening doors, windows, balconies, and a rooftop garden. Every girl's dream come true.",
    price: 3499, originalPrice: 5499, discount: 36, category: "Dolls", ageRange: "5-10 years", minAge: 4, maxAge: 9,
    images: [dollHouse], rating: 4.7, reviewCount: 167, stock: 25, brand: "DreamHouse",
    sku: "DL-002", features: ["3 stories", "Furniture set included", "2 dolls included", "Opening doors & windows", "Rooftop garden"],
    specifications: { dimensions: "60 x 40 x 80 cm", weight: "3.5kg", material: "Wood & Plastic", color: "Pink/White" },
    tags: ["featured"], inStock: true, gender: "Girls", theme: "Princess"
  },
  {
    id: "TOY014", name: "Junior Cricket Set", description: "Complete cricket set with size-3 bat, tennis ball, plastic stumps, and carrying bag. Perfect for backyard and park cricket matches!",
    price: 999, originalPrice: 1699, discount: 41, category: "Outdoor", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [cricketSet], rating: 4.2, reviewCount: 145, stock: 55, brand: "SportStar",
    sku: "SP-001", features: ["Size 3 willow bat", "Tennis ball included", "Plastic stumps & bails", "Carry bag", "Lightweight"],
    specifications: { dimensions: "65 cm bat length", weight: "1.8kg total", material: "Willow Wood & Plastic", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY015", name: "Electronic Keyboard Piano with Mic", description: "37-key electronic keyboard with microphone and stand. Includes 8 rhythms, 4 drum sounds, and record/playback feature for budding musicians.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Musical", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [keyboardPiano], rating: 4.5, reviewCount: 156, stock: 40, brand: "MelodyKids",
    sku: "MU-002", features: ["37 keys", "Microphone included", "8 rhythms & 4 drums", "Record/playback", "Volume control"],
    specifications: { dimensions: "54 x 17 x 5 cm", weight: "1.1kg", material: "ABS Plastic", batteryType: "4x AA", color: "Pink" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY029", name: "Dinosaur World Play Set", description: "Complete dinosaur play set with 12 realistic dinosaur figures, trees, rocks, and a prehistoric landscape play mat. Roar into adventure!",
    price: 1399, originalPrice: 2299, discount: 39, category: "Action Figures", ageRange: "5-10 years", minAge: 3, maxAge: 8,
    images: [dinosaurSet], rating: 4.6, reviewCount: 289, stock: 65, brand: "DinoLand",
    sku: "AF-003", features: ["12 realistic dinosaurs", "Play mat included", "Trees & rocks accessories", "Info cards for each dino", "Storage box"],
    specifications: { dimensions: "Various sizes", weight: "1.5kg", material: "PVC & Rubber", color: "Multicolor" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex", theme: "Dinosaurs"
  },
  {
    id: "TOY030", name: "Junior Magician Kit", description: "Learn 50+ magic tricks! Complete magic kit with props, instruction booklet, performance cape, and access to online video tutorials.",
    price: 849, originalPrice: 1399, discount: 39, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [magicKit], rating: 4.3, reviewCount: 167, stock: 55, brand: "MagicPro",
    sku: "ED-004", features: ["50+ magic tricks", "Video tutorials", "All props included", "Beginner friendly", "Performance cape"],
    specifications: { dimensions: "30 x 25 x 8 cm", weight: "700g", material: "Various", color: "Black/Red" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY031", name: "Wooden Railway Train Set - 80 Pcs", description: "Classic wooden train set with tracks, bridges, buildings, and trains. 80+ pieces for endless creative play compatible with major brands.",
    price: 1999, originalPrice: 3199, discount: 38, category: "Vehicles", ageRange: "0-5 years", minAge: 2, maxAge: 6,
    images: [trainSet], rating: 4.8, reviewCount: 198, stock: 30, brand: "TrainTown",
    sku: "VH-001", features: ["80+ pieces", "Natural beech wood", "Bridges & tunnels", "Compatible with major brands", "Storage box"],
    specifications: { dimensions: "Various", weight: "2.8kg", material: "Beech Wood", color: "Natural/Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  // Extra 5-10 year products
  {
    id: "TOY036", name: "Deluxe RC Monster Truck", description: "All-terrain RC monster truck with massive wheels, 4WD drive, and waterproof body. Conquers any surface - sand, grass, mud!",
    price: 2499, originalPrice: 3999, discount: 38, category: "Vehicles", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [rcCar], rating: 4.4, reviewCount: 98, stock: 30, brand: "SpeedKing",
    sku: "RC-002", features: ["4WD all-terrain", "Waterproof body", "Massive rubber wheels", "2.4GHz remote", "Rechargeable battery"],
    specifications: { dimensions: "32 x 22 x 16 cm", weight: "1.2kg", material: "ABS Plastic", batteryType: "Li-Po", color: "Blue/Black" },
    tags: [], inStock: true, gender: "Boys", theme: "Racing", badge: "New Arrival"
  },
  {
    id: "TOY037", name: "Creative Building Blocks - 200 Pcs", description: "200 piece creative building set with special pieces, wheels, windows, and doors. Build anything you can imagine!",
    price: 1499, originalPrice: 2499, discount: 40, category: "Building Blocks", ageRange: "5-10 years", minAge: 5, maxAge: 12,
    images: [buildingBlocks], rating: 4.6, reviewCount: 178, stock: 50, brand: "BlockBuddies",
    sku: "BB-003", features: ["200 pieces", "Special pieces included", "Wheels & windows", "Idea booklet", "Storage container"],
    specifications: { dimensions: "Various", weight: "1.8kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY038", name: "Family Quiz Night Game", description: "Ultimate family quiz game with 500+ questions across science, history, sports, and entertainment. Perfect for game nights!",
    price: 699, originalPrice: 1099, discount: 36, category: "Board Games", ageRange: "5-10 years", minAge: 7, maxAge: 14,
    images: [boardGame], rating: 4.5, reviewCount: 89, stock: 70, brand: "GameMasters",
    sku: "BG-003", features: ["500+ questions", "4 categories", "2-8 players", "Timer included", "Score board"],
    specifications: { dimensions: "28 x 28 x 6 cm", weight: "650g", material: "Cardboard", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },

  // ===== 10-15 YEARS (7 products) =====
  {
    id: "TOY016", name: "Advanced Robotics Kit - RoboGenius", description: "Build and program your own robot! 300+ parts, motors, sensors, and a beginner-friendly coding app. Create 10 different robot designs.",
    price: 4999, originalPrice: 7999, discount: 38, category: "Robots", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [roboticsKit], rating: 4.9, reviewCount: 123, stock: 20, brand: "RoboGenius",
    sku: "RB-001", features: ["300+ parts", "App-controlled via Bluetooth", "10 robot designs", "STEM certified", "Rechargeable motors"],
    specifications: { dimensions: "40 x 30 x 10 cm (box)", weight: "2.5kg", material: "ABS Plastic & Metal", batteryType: "Rechargeable" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY017", name: "Epic Conquest Strategy Game", description: "Epic strategy board game - conquer territories, build empires, and outsmart opponents! 2-4 players with intense 90-minute gameplay.",
    price: 1999, originalPrice: 2999, discount: 33, category: "Board Games", ageRange: "10-15 years", minAge: 10, maxAge: 16,
    images: [strategyGame], rating: 4.7, reviewCount: 87, stock: 40, brand: "GameMasters",
    sku: "BG-002", features: ["2-4 players", "90 min gameplay", "Detailed world map", "500+ game pieces", "Strategy guide"],
    specifications: { dimensions: "40 x 40 x 10 cm", weight: "1.5kg", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY018", name: "World Landmarks Architecture Set", description: "1500+ piece architectural building set. Build Taj Mahal, Eiffel Tower, and more with detailed instructions and display stands.",
    price: 3999, originalPrice: 6499, discount: 38, category: "Building Blocks", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [architectureSet], rating: 4.8, reviewCount: 156, stock: 30, brand: "BlockMaster",
    sku: "BB-002", features: ["1500+ pieces", "5 landmark designs", "Display stands", "Detailed instructions", "Premium quality bricks"],
    specifications: { dimensions: "Various builds", weight: "2kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex", theme: "Architecture"
  },
  {
    id: "TOY019", name: "RC Racing Drone with HD Camera", description: "High-performance racing drone with HD camera, auto-hover, headless mode, and 15-minute flight time. Includes extra battery pack.",
    price: 3999, originalPrice: 6499, discount: 38, category: "Electronic", ageRange: "10-15 years", minAge: 12, maxAge: 18,
    images: [drone], rating: 4.4, reviewCount: 98, stock: 15, brand: "SkyFlyer",
    sku: "EL-001", features: ["HD Camera", "Auto-hover mode", "Headless mode", "15min flight time", "Extra battery included"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "350g", material: "Carbon Fiber & Plastic", batteryType: "Li-Po" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY020", name: "Coding & Electronics Kit", description: "Learn programming hands-on! Build circuits, write code, and create 20 interactive projects with Arduino-based controller and online tutorials.",
    price: 2999, originalPrice: 4499, discount: 33, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [codingKit], rating: 4.6, reviewCount: 78, stock: 25, brand: "CodeKids",
    sku: "ED-003", features: ["20 projects", "Arduino-compatible", "LEDs, sensors & motors", "Online tutorials", "Beginner friendly"],
    specifications: { dimensions: "25 x 20 x 8 cm", weight: "800g", material: "Electronic Components", color: "Blue/Green" },
    tags: [], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY021", name: "Professional Art Easel Set", description: "Adjustable wooden art easel with complete painting supplies - 3 canvases, 24 acrylic paints, 10 brushes, and palette.",
    price: 2499, originalPrice: 3999, discount: 38, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [artEasel], rating: 4.5, reviewCount: 67, stock: 20, brand: "ArtStar",
    sku: "AC-002", features: ["Adjustable height", "3 canvases included", "24 acrylic paints", "10 professional brushes", "Palette included"],
    specifications: { dimensions: "60 x 40 x 150 cm", weight: "3kg", material: "Beech Wood", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY032", name: "Kids Telescope - StarGazer", description: "Beginner telescope with 90x magnification. See the moon, planets, and stars! Includes star map, tripod, and phone adapter for astrophotography.",
    price: 3499, originalPrice: 5499, discount: 36, category: "Educational", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [telescope], rating: 4.5, reviewCount: 89, stock: 20, brand: "StarGazer",
    sku: "ED-005", features: ["90x magnification", "Sturdy tripod", "Star map included", "Phone adapter", "Carry case"],
    specifications: { dimensions: "45 x 10 x 10 cm", weight: "1.8kg", material: "Aluminum & Glass", color: "Silver/Black" },
    tags: ["featured"], inStock: true, gender: "Unisex", theme: "Space"
  },

  // ===== 15-18 YEARS (3 products) =====
  {
    id: "TOY023", name: "Collector's Anime Figure", description: "Premium detailed anime figure with dynamic action pose and illuminated display base. Hand-painted with high-quality PVC material. Collector's edition with certificate.",
    price: 3499, originalPrice: 4999, discount: 30, category: "Action Figures", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [animeFigure], rating: 4.8, reviewCount: 89, stock: 10, brand: "FigureArts",
    sku: "AF-002", features: ["25cm tall", "Hand-painted details", "LED display base", "Collector's box", "Authenticity certificate"],
    specifications: { dimensions: "25 x 15 x 15 cm", weight: "500g", material: "PVC & ABS", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Anime"
  },
  {
    id: "TOY024", name: "3D Metal Puzzle - Spaceship", description: "Intricate 3D metal puzzle of a sci-fi spaceship. 200+ stainless steel pieces that snap together without glue for a stunning display piece.",
    price: 1099, originalPrice: 1599, discount: 31, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [metalPuzzle], rating: 4.6, reviewCount: 56, stock: 50, brand: "MetalCraft",
    sku: "PZ-001", features: ["200+ metal pieces", "No glue needed", "Stainless steel", "Display stand included", "Detailed instructions"],
    specifications: { dimensions: "20 x 15 x 10 cm (assembled)", weight: "300g", material: "Stainless Steel", color: "Silver" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY025", name: "Smart Watch for Teens", description: "Feature-packed smart watch with fitness tracking, heart rate monitor, music control, and notifications. 7-day battery and water-resistant.",
    price: 2999, originalPrice: 4499, discount: 33, category: "Electronic", ageRange: "15-18 years", minAge: 13, maxAge: 18,
    images: [smartWatch], rating: 4.4, reviewCount: 234, stock: 40, brand: "TechGear",
    sku: "EL-002", features: ["Heart rate monitor", "Step counter & calories", "IP68 water resistant", "7-day battery life", "Bluetooth 5.0"],
    specifications: { dimensions: "4.4 x 3.8 x 1.2 cm", weight: "45g", material: "Aluminum & Silicone", color: "Black" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY022", name: "Acoustic Guitar Starter Pack", description: "Full-size acoustic guitar with tuner, picks, strap, carry bag, and beginner lesson book. Perfect for aspiring musicians!",
    price: 4499, originalPrice: 7499, discount: 40, category: "Musical", ageRange: "15-18 years", minAge: 10, maxAge: 18,
    images: [guitar], rating: 4.3, reviewCount: 112, stock: 15, brand: "TuneUp",
    sku: "MU-003", features: ["Full-size 38 inch", "Steel strings", "Digital tuner", "Carry bag", "Lesson book & picks"],
    specifications: { dimensions: "100 x 38 x 12 cm", weight: "2.2kg", material: "Basswood & Spruce", color: "Natural" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY026", name: "Pro Sketch & Drawing Set", description: "Professional-grade sketching set with 50 graphite pencils, charcoal sticks, blending tools, and premium A3 sketch pad in carry case.",
    price: 1699, originalPrice: 2699, discount: 37, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [sketchSet], rating: 4.7, reviewCount: 98, stock: 35, brand: "ArtPro",
    sku: "AC-003", features: ["50 graphite pencils (6H-12B)", "Charcoal set", "A3 premium sketch pad", "Eraser & blending tools", "Hard-shell carry case"],
    specifications: { dimensions: "35 x 25 x 5 cm", weight: "1.2kg", material: "Graphite & Paper", color: "Black" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY027", name: "Advanced Solar Robot Kit - 12 in 1", description: "Build 12 different robots with solar and battery power! Advanced STEM kit with metal parts, competition-ready designs.",
    price: 6999, originalPrice: 10999, discount: 36, category: "Robots", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [stemRobot], rating: 4.9, reviewCount: 45, stock: 10, brand: "RoboGenius",
    sku: "RB-002", features: ["12 robot designs", "Solar + battery power", "Advanced coding via app", "Metal parts", "Competition ready"],
    specifications: { dimensions: "50 x 35 x 15 cm (box)", weight: "3.5kg", material: "Metal & Plastic", batteryType: "Solar/Li-ion" },
    tags: ["featured"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY028", name: "Mechanical Puzzle Box", description: "Handcrafted walnut wood puzzle box with 5 layers of secret compartments. Solve mechanical puzzles to unlock each level!",
    price: 2199, originalPrice: 3199, discount: 31, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [puzzleBox], rating: 4.5, reviewCount: 67, stock: 20, brand: "WoodCraft",
    sku: "PZ-002", features: ["5 secret layers", "Handcrafted walnut", "Mechanical locks", "Premium gift box", "Instruction hints"],
    specifications: { dimensions: "12 x 12 x 12 cm", weight: "800g", material: "Walnut Wood", color: "Dark Brown" },
    tags: [], inStock: true, gender: "Unisex"
  },
];

export const reviews: Review[] = [
  { id: "R001", productId: "TOY001", userName: "Priya S.", rating: 5, comment: "My daughter loves this teddy! So soft and cuddly. Best gift ever! Will definitely order more.", date: "2026-02-15" },
  { id: "R002", productId: "TOY001", userName: "Rahul K.", rating: 5, comment: "Excellent quality plush. My son carries it everywhere. Very well made.", date: "2026-02-10" },
  { id: "R003", productId: "TOY001", userName: "Ananya M.", rating: 4, comment: "Very cute and well-made. Slightly smaller than expected but my baby loves it.", date: "2026-01-28" },
  { id: "R004", productId: "TOY008", userName: "Vikram R.", rating: 5, comment: "Amazing RC car! Super fast and durable. My kid is absolutely thrilled with it.", date: "2026-03-01" },
  { id: "R005", productId: "TOY008", userName: "Deepak P.", rating: 4, comment: "Great speed and control. Battery lasts about 20 mins. Very fun!", date: "2026-02-20" },
  { id: "R006", productId: "TOY010", userName: "Meera T.", rating: 5, comment: "Best science kit! My daughter completed all 50 experiments. Educational and super fun.", date: "2026-02-25" },
  { id: "R007", productId: "TOY010", userName: "Suresh N.", rating: 5, comment: "Educational and engaging. Kids love doing experiments. Great STEM learning tool.", date: "2026-02-18" },
  { id: "R008", productId: "TOY016", userName: "Arjun D.", rating: 5, comment: "Incredible robotics kit! My son learned coding and engineering. Worth every rupee!", date: "2026-03-05" },
  { id: "R009", productId: "TOY016", userName: "Kavitha L.", rating: 5, comment: "Amazing quality. The app makes programming so intuitive. Highly recommend!", date: "2026-02-28" },
  { id: "R010", productId: "TOY018", userName: "Ravi G.", rating: 5, comment: "Beautiful builds! The Taj Mahal model is absolutely stunning on display.", date: "2026-03-03" },
  { id: "R011", productId: "TOY013", userName: "Sneha B.", rating: 5, comment: "My daughter's dream come true! Beautiful detail, great quality doll house.", date: "2026-02-12" },
  { id: "R012", productId: "TOY025", userName: "Aditya V.", rating: 4, comment: "Great smart watch for teens. Accurate fitness tracking and nice design.", date: "2026-03-06" },
  { id: "R013", productId: "TOY029", userName: "Pooja H.", rating: 5, comment: "Dinosaurs look so realistic! My kids play with them daily. Excellent set!", date: "2026-02-22" },
  { id: "R014", productId: "TOY031", userName: "Karthik S.", rating: 5, comment: "Classic toy, beautifully made. Hours and hours of creative play.", date: "2026-01-30" },
  { id: "R015", productId: "TOY007", userName: "Lakshmi R.", rating: 4, comment: "Great blocks, perfect size for toddler hands. Good quality plastic.", date: "2026-02-05" },
  { id: "R016", productId: "TOY033", userName: "Neha K.", rating: 5, comment: "The cutest elephant ever! Colors are gorgeous. My baby sleeps with it.", date: "2026-03-02" },
  { id: "R017", productId: "TOY005", userName: "Divya M.", rating: 5, comment: "Adorable doll! My daughter feeds it and puts it to sleep. Great quality.", date: "2026-02-14" },
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
  "MagicPro", "TrainTown", "StarGazer", "BabyJoy"
];

export const ageRanges = [
  { label: "0-5 years", min: 0, max: 5 },
  { label: "5-10 years", min: 5, max: 10 },
  { label: "10-15 years", min: 10, max: 15 },
  { label: "15-18 years", min: 15, max: 18 },
];

export const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1,000", min: 500, max: 1000 },
  { label: "₹1,000 - ₹2,500", min: 1000, max: 2500 },
  { label: "₹2,500 - ₹5,000", min: 2500, max: 5000 },
  { label: "₹5,000 - ₹15,000", min: 5000, max: 15000 },
];

export const popularSearches = [
  "RC Car", "Teddy Bear", "Building Blocks", "Science Kit", "Doll House",
  "Board Games", "Robotics Kit", "Art Kit", "Dinosaurs", "Drone",
];

export const themes = [
  { name: "Superheroes", emoji: "🦸", count: 2 },
  { name: "Dinosaurs", emoji: "🦕", count: 2 },
  { name: "STEM", emoji: "🔬", count: 4 },
  { name: "Princess", emoji: "👸", count: 2 },
  { name: "Racing", emoji: "🏎️", count: 3 },
  { name: "Space", emoji: "🚀", count: 2 },
  { name: "Anime", emoji: "⚡", count: 1 },
  { name: "Sports", emoji: "🏏", count: 1 },
];
