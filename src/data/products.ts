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
  // ===== 0-5 YEARS (25 products) =====
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
  // New 0-5 products
  {
    id: "TOY039", name: "Soft Bunny Lovey Blanket", description: "Ultra-soft security blanket with adorable bunny head. Perfect first companion for newborns. Made with organic cotton.",
    price: 449, originalPrice: 799, discount: 44, category: "Soft Toys", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [teddyBear], rating: 4.7, reviewCount: 187, stock: 100, brand: "CuddlePals",
    sku: "ST-003", features: ["Organic cotton", "Super soft", "Security blanket", "Machine washable", "BIS certified"],
    specifications: { dimensions: "30 x 30 cm", weight: "120g", material: "Organic Cotton", color: "White/Pink" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY040", name: "Musical Crib Mobile", description: "Rotating crib mobile with soft plush animals and soothing lullabies. Auto-off timer and adjustable volume for peaceful sleep.",
    price: 899, originalPrice: 1499, discount: 40, category: "Musical", ageRange: "0-5 years", minAge: 0, maxAge: 2,
    images: [activityTable], rating: 4.5, reviewCount: 156, stock: 55, brand: "MelodyKids",
    sku: "MU-004", features: ["6 plush animals", "12 lullabies", "Auto-off 30 min", "Adjustable arm", "Battery operated"],
    specifications: { dimensions: "35 x 35 x 50 cm", weight: "600g", material: "Plush & ABS Plastic", batteryType: "2x AA" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY041", name: "Foam Alphabet Floor Mat", description: "Interlocking foam play mat with removable alphabet letters. Creates safe play area while teaching ABCs. 26 tiles.",
    price: 1199, originalPrice: 1999, discount: 40, category: "Educational", ageRange: "0-5 years", minAge: 1, maxAge: 5,
    images: [buildingBlocks], rating: 4.6, reviewCount: 203, stock: 80, brand: "LearnPlay",
    sku: "ED-006", features: ["26 alphabet tiles", "EVA foam", "Non-toxic", "Waterproof", "Easy to clean"],
    specifications: { dimensions: "30 x 30 cm each", weight: "2.5kg", material: "EVA Foam", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY042", name: "Wooden Number Train", description: "Colorful wooden train with numbered carriages 0-9. Teach counting while playing! Connects with magnets.",
    price: 599, originalPrice: 999, discount: 40, category: "Educational", ageRange: "0-5 years", minAge: 2, maxAge: 5,
    images: [trainSet], rating: 4.4, reviewCount: 134, stock: 90, brand: "WoodCraft",
    sku: "ED-007", features: ["Numbers 0-9", "Magnetic connections", "Non-toxic paint", "Beech wood", "Smooth edges"],
    specifications: { dimensions: "60 cm total length", weight: "450g", material: "Beech Wood", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY043", name: "Baby's First Piano Mat", description: "Giant floor piano mat that plays notes when stepped on! Encourages movement and musical exploration for toddlers.",
    price: 799, originalPrice: 1299, discount: 38, category: "Musical", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [keyboardPiano], rating: 4.3, reviewCount: 98, stock: 65, brand: "MelodyKids",
    sku: "MU-005", features: ["8 piano keys", "4 instrument sounds", "Anti-slip base", "Foldable design", "Volume control"],
    specifications: { dimensions: "100 x 36 cm", weight: "400g", material: "PVC", batteryType: "3x AAA" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY044", name: "Stacking Cups Rainbow Set", description: "10 nesting and stacking cups in rainbow colors with numbers. Stack, nest, pour water - endless possibilities!",
    price: 299, originalPrice: 499, discount: 40, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [stackingRings], rating: 4.5, reviewCount: 267, stock: 200, brand: "SmartKids",
    sku: "ED-008", features: ["10 cups", "Numbers on bottom", "BPA-free", "Bath play compatible", "Bright colors"],
    specifications: { dimensions: "15 cm tallest cup", weight: "200g", material: "BPA-free Plastic", color: "Rainbow" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY045", name: "Plush Giraffe with Rattle", description: "Adorable giraffe plush toy with built-in rattle sound. Soft velvet texture perfect for tiny hands to grab and shake.",
    price: 399, originalPrice: 699, discount: 43, category: "Soft Toys", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [elephantPlush], rating: 4.6, reviewCount: 178, stock: 110, brand: "CuddlePals",
    sku: "ST-004", features: ["Built-in rattle", "Velvet texture", "20cm tall", "Machine washable", "BIS certified"],
    specifications: { dimensions: "20 x 12 x 8 cm", weight: "150g", material: "Velvet Plush", color: "Yellow/Brown" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY046", name: "Bath Time Water Toys Set", description: "12-piece bath toy set with water wheels, scoops, sprinklers, and floating animals. Turns bath time into adventure time!",
    price: 549, originalPrice: 899, discount: 39, category: "Bath Toys", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [bathDucks], rating: 4.4, reviewCount: 145, stock: 95, brand: "SplashFun",
    sku: "BT-003", features: ["12 pieces", "Water wheels", "Suction cups", "Mold-resistant", "BPA-free"],
    specifications: { dimensions: "Various", weight: "350g", material: "Safe Plastic", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY047", name: "Finger Painting Set for Toddlers", description: "Non-toxic washable finger paints in 8 vibrant colors. Safe for little artists with painting smock and paper pad included.",
    price: 349, originalPrice: 599, discount: 42, category: "Arts & Crafts", ageRange: "0-5 years", minAge: 2, maxAge: 5,
    images: [artKit], rating: 4.3, reviewCount: 123, stock: 120, brand: "ArtStar",
    sku: "AC-004", features: ["8 colors", "Non-toxic & washable", "Painting smock", "Paper pad included", "Easy-squeeze bottles"],
    specifications: { dimensions: "25 x 20 x 5 cm", weight: "500g", material: "Non-toxic Paint", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY048", name: "Push Walker with Activities", description: "Sturdy push walker with activity panel featuring gears, buttons, and spinning toys. Helps baby learn to walk safely.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [activityTable], rating: 4.7, reviewCount: 189, stock: 40, brand: "SmartKids",
    sku: "ED-009", features: ["Activity panel", "Adjustable speed", "Anti-slip wheels", "Sturdy design", "Music & lights"],
    specifications: { dimensions: "40 x 35 x 45 cm", weight: "2kg", material: "ABS Plastic", batteryType: "2x AA" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY049", name: "Wooden Peg Puzzle - Animals", description: "Chunky wooden peg puzzle with 8 adorable farm animals. Develops fine motor skills and animal recognition.",
    price: 349, originalPrice: 599, discount: 42, category: "Educational", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [shapeSorter], rating: 4.5, reviewCount: 167, stock: 130, brand: "WoodCraft",
    sku: "ED-010", features: ["8 animal pieces", "Chunky pegs", "Non-toxic paint", "Picture underneath", "Natural wood"],
    specifications: { dimensions: "30 x 22 x 2 cm", weight: "350g", material: "Beech Wood", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY050", name: "Soft Building Blocks - 24 Pcs", description: "Ultra-soft squeezable building blocks for babies. Safe for teething, easy to grip, and stackable for creative play.",
    price: 649, originalPrice: 1099, discount: 41, category: "Building Blocks", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [buildingBlocks], rating: 4.6, reviewCount: 198, stock: 85, brand: "BlockBuddies",
    sku: "BB-004", features: ["24 soft blocks", "BPA-free silicone", "Textured surfaces", "Squeezable", "Numbers & animals embossed"],
    specifications: { dimensions: "5 x 5 x 5 cm each", weight: "600g", material: "Food-grade Silicone", color: "Pastel" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY051", name: "Toddler Xylophone", description: "Colorful 8-note xylophone with safe rounded mallet. Introduces toddlers to music with clear, pleasant tones.",
    price: 399, originalPrice: 699, discount: 43, category: "Musical", ageRange: "0-5 years", minAge: 1, maxAge: 4,
    images: [keyboardPiano], rating: 4.4, reviewCount: 156, stock: 95, brand: "MelodyKids",
    sku: "MU-006", features: ["8 colorful notes", "Safe rounded mallet", "Metal keys", "Wooden base", "Color-coded"],
    specifications: { dimensions: "25 x 13 x 5 cm", weight: "350g", material: "Wood & Metal", color: "Rainbow" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY052", name: "My First Doctor Kit", description: "Pretend play doctor kit with stethoscope, thermometer, syringe, and doctor bag. Helps reduce fear of doctor visits!",
    price: 549, originalPrice: 899, discount: 39, category: "Educational", ageRange: "0-5 years", minAge: 2, maxAge: 5,
    images: [scienceKit], rating: 4.3, reviewCount: 145, stock: 70, brand: "SmartKids",
    sku: "ED-011", features: ["10 pieces", "Working stethoscope", "Carry bag", "Safe plastic", "Role-play learning"],
    specifications: { dimensions: "25 x 18 x 8 cm", weight: "400g", material: "ABS Plastic", color: "White/Blue" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY053", name: "Caterpillar Stacking Tower", description: "Adorable caterpillar-themed stacking toy with 6 graduated segments. Each piece has different textures for sensory play.",
    price: 479, originalPrice: 799, discount: 40, category: "Educational", ageRange: "0-5 years", minAge: 0, maxAge: 3,
    images: [stackingRings], rating: 4.5, reviewCount: 112, stock: 90, brand: "LearnPlay",
    sku: "ED-012", features: ["6 segments", "Different textures", "BPA-free", "Develops motor skills", "Cute design"],
    specifications: { dimensions: "15 x 15 x 20 cm", weight: "280g", material: "BPA-free Plastic", color: "Green/Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },

  // ===== 5-10 YEARS (25 products) =====
  {
    id: "TOY008", name: "RC Racing Car - SpeedKing", description: "High-speed RC car with LED headlights and rechargeable battery. Features 2.4GHz remote for interference-free racing at 30km/h!",
    price: 1999, originalPrice: 3499, discount: 43, category: "Vehicles", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [rcCar], rating: 4.5, reviewCount: 189, stock: 45, brand: "SpeedKing",
    sku: "RC-001", features: ["2.4GHz Remote Control", "LED Headlights", "Rechargeable Li-ion Battery", "30km/h top speed", "Shock absorbers"],
    specifications: { dimensions: "25 x 12 x 8 cm", weight: "450g", material: "ABS Plastic", batteryType: "Li-ion Rechargeable", color: "Red" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Boys", theme: "Racing"
  },
  {
    id: "TOY009", name: "Detective Mystery Board Game", description: "Exciting mystery-solving board game for the whole family! Solve clues, interrogate suspects, and crack the case. 100+ unique clue cards.",
    price: 1099, originalPrice: 1599, discount: 31, category: "Board Games", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [boardGame], rating: 4.6, reviewCount: 134, stock: 60, brand: "GameMasters",
    sku: "BG-001", features: ["2-6 players", "45 min play time", "100+ clue cards", "Highly replayable", "Family friendly"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "800g", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY010", name: "Science Experiment Lab Kit", description: "Complete science lab with 50+ experiments! Learn chemistry, physics, and biology through fun hands-on activities with safety goggles and lab coat.",
    price: 1699, originalPrice: 2799, discount: 39, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 10,
    images: [scienceKit], rating: 4.8, reviewCount: 312, stock: 35, brand: "ScienceWhiz",
    sku: "SC-001", features: ["50+ experiments", "Safety goggles included", "Step-by-step manual", "Non-toxic chemicals", "Lab coat included"],
    specifications: { dimensions: "35 x 25 x 10 cm", weight: "1.2kg", material: "Various", color: "Blue/White" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY011", name: "Deluxe Art & Craft Box - 150 Pcs", description: "Ultimate art supply box with 150+ items! Includes watercolors, sketch pens, colored pencils, oil pastels, and craft supplies.",
    price: 799, originalPrice: 1399, discount: 43, category: "Arts & Crafts", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [artKit], rating: 4.4, reviewCount: 223, stock: 100, brand: "ArtStar",
    sku: "AC-001", features: ["150+ items", "Non-toxic colors", "Premium wooden case", "Drawing pad included", "Complete art set"],
    specifications: { dimensions: "40 x 30 x 5 cm", weight: "900g", material: "Various", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY012", name: "Superhero Action Figure Set", description: "Set of 5 superhero action figures with movable joints, accessories, and collector cards. Each figure stands 15cm tall.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Action Figures", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [actionFigures], rating: 4.3, reviewCount: 178, stock: 70, brand: "HeroZone",
    sku: "AF-001", features: ["5 figures included", "20+ movable joints", "Accessories & weapons", "Display stands", "Collector cards"],
    specifications: { dimensions: "15 cm each", weight: "600g total", material: "PVC", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Boys", theme: "Superheroes"
  },
  {
    id: "TOY013", name: "Princess Dream Doll House", description: "Beautiful 3-story doll house with furniture and dolls! Features opening doors, windows, balconies, and a rooftop garden.",
    price: 3499, originalPrice: 5499, discount: 36, category: "Dolls", ageRange: "5-10 years", minAge: 4, maxAge: 9,
    images: [dollHouse], rating: 4.7, reviewCount: 167, stock: 25, brand: "DreamHouse",
    sku: "DL-002", features: ["3 stories", "Furniture set included", "2 dolls included", "Opening doors & windows", "Rooftop garden"],
    specifications: { dimensions: "60 x 40 x 80 cm", weight: "3.5kg", material: "Wood & Plastic", color: "Pink/White" },
    tags: ["featured"], inStock: true, gender: "Girls", theme: "Princess"
  },
  {
    id: "TOY014", name: "Junior Cricket Set", description: "Complete cricket set with size-3 bat, tennis ball, plastic stumps, and carrying bag. Perfect for backyard and park cricket!",
    price: 999, originalPrice: 1699, discount: 41, category: "Outdoor", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [cricketSet], rating: 4.2, reviewCount: 145, stock: 55, brand: "SportStar",
    sku: "SP-001", features: ["Size 3 willow bat", "Tennis ball included", "Plastic stumps & bails", "Carry bag", "Lightweight"],
    specifications: { dimensions: "65 cm bat length", weight: "1.8kg total", material: "Willow Wood & Plastic", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY015", name: "Electronic Keyboard Piano with Mic", description: "37-key electronic keyboard with microphone and stand. 8 rhythms, 4 drum sounds, and record/playback feature.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Musical", ageRange: "5-10 years", minAge: 4, maxAge: 10,
    images: [keyboardPiano], rating: 4.5, reviewCount: 156, stock: 40, brand: "MelodyKids",
    sku: "MU-002", features: ["37 keys", "Microphone included", "8 rhythms & 4 drums", "Record/playback", "Volume control"],
    specifications: { dimensions: "54 x 17 x 5 cm", weight: "1.1kg", material: "ABS Plastic", batteryType: "4x AA", color: "Pink" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY029", name: "Dinosaur World Play Set", description: "Complete dinosaur play set with 12 realistic dinosaur figures, trees, rocks, and a prehistoric landscape play mat.",
    price: 1399, originalPrice: 2299, discount: 39, category: "Action Figures", ageRange: "5-10 years", minAge: 3, maxAge: 8,
    images: [dinosaurSet], rating: 4.6, reviewCount: 289, stock: 65, brand: "DinoLand",
    sku: "AF-003", features: ["12 realistic dinosaurs", "Play mat included", "Trees & rocks accessories", "Info cards for each dino", "Storage box"],
    specifications: { dimensions: "Various sizes", weight: "1.5kg", material: "PVC & Rubber", color: "Multicolor" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex", theme: "Dinosaurs"
  },
  {
    id: "TOY030", name: "Junior Magician Kit", description: "Learn 50+ magic tricks! Complete magic kit with props, instruction booklet, and performance cape.",
    price: 849, originalPrice: 1399, discount: 39, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [magicKit], rating: 4.3, reviewCount: 167, stock: 55, brand: "MagicPro",
    sku: "ED-004", features: ["50+ magic tricks", "Video tutorials", "All props included", "Beginner friendly", "Performance cape"],
    specifications: { dimensions: "30 x 25 x 8 cm", weight: "700g", material: "Various", color: "Black/Red" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY031", name: "Wooden Railway Train Set - 80 Pcs", description: "Classic wooden train set with tracks, bridges, buildings, and trains. 80+ pieces compatible with major brands.",
    price: 1999, originalPrice: 3199, discount: 38, category: "Vehicles", ageRange: "5-10 years", minAge: 3, maxAge: 8,
    images: [trainSet], rating: 4.8, reviewCount: 198, stock: 30, brand: "TrainTown",
    sku: "VH-001", features: ["80+ pieces", "Natural beech wood", "Bridges & tunnels", "Compatible with major brands", "Storage box"],
    specifications: { dimensions: "Various", weight: "2.8kg", material: "Beech Wood", color: "Natural/Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY036", name: "Deluxe RC Monster Truck", description: "All-terrain RC monster truck with massive wheels, 4WD drive, and waterproof body. Conquers any surface!",
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
    id: "TOY038", name: "Family Quiz Night Game", description: "Ultimate family quiz game with 500+ questions across science, history, sports, and entertainment.",
    price: 699, originalPrice: 1099, discount: 36, category: "Board Games", ageRange: "5-10 years", minAge: 7, maxAge: 14,
    images: [boardGame], rating: 4.5, reviewCount: 89, stock: 70, brand: "GameMasters",
    sku: "BG-003", features: ["500+ questions", "4 categories", "2-8 players", "Timer included", "Score board"],
    specifications: { dimensions: "28 x 28 x 6 cm", weight: "650g", material: "Cardboard", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  // New 5-10 products
  {
    id: "TOY054", name: "Marble Run Super Set - 120 Pcs", description: "Build gravity-powered marble runs! 120 pieces with spirals, funnels, and jumps. Hours of STEM learning fun.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Building Blocks", ageRange: "5-10 years", minAge: 5, maxAge: 10,
    images: [buildingBlocks], rating: 4.7, reviewCount: 145, stock: 45, brand: "BlockBuddies",
    sku: "BB-005", features: ["120 pieces", "30 glass marbles", "Spirals & funnels", "STEM learning", "Instruction booklet"],
    specifications: { dimensions: "Various", weight: "1.5kg", material: "ABS Plastic", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY055", name: "Treasure Hunt Board Game", description: "Adventure board game where players navigate through jungles and caves to find hidden treasure. Roll dice and solve riddles!",
    price: 899, originalPrice: 1499, discount: 40, category: "Board Games", ageRange: "5-10 years", minAge: 6, maxAge: 10,
    images: [boardGame], rating: 4.4, reviewCount: 112, stock: 55, brand: "GameMasters",
    sku: "BG-004", features: ["2-4 players", "30 min gameplay", "3D game board", "80 riddle cards", "Treasure chest pieces"],
    specifications: { dimensions: "32 x 32 x 10 cm", weight: "900g", material: "Cardboard & Plastic", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY056", name: "Kids' Badminton Set", description: "Complete badminton set with 2 lightweight rackets, 3 shuttlecocks, and portable net. Great for outdoor family fun!",
    price: 799, originalPrice: 1299, discount: 38, category: "Outdoor", ageRange: "5-10 years", minAge: 5, maxAge: 12,
    images: [cricketSet], rating: 4.3, reviewCount: 87, stock: 65, brand: "SportStar",
    sku: "SP-002", features: ["2 rackets", "3 shuttlecocks", "Portable net", "Carry bag", "Lightweight design"],
    specifications: { dimensions: "58 cm racket", weight: "600g total", material: "Aluminum & Nylon", color: "Blue/Red" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY057", name: "Fashion Designer Doll Collection", description: "Set of 3 fashion dolls with 30+ outfits, accessories, and a mini wardrobe closet. Mix and match styles!",
    price: 1899, originalPrice: 2999, discount: 37, category: "Dolls", ageRange: "5-10 years", minAge: 4, maxAge: 9,
    images: [babyDoll], rating: 4.5, reviewCount: 156, stock: 35, brand: "DollWorld",
    sku: "DL-003", features: ["3 dolls", "30+ outfits", "Mini wardrobe", "Hair accessories", "Shoes & bags"],
    specifications: { dimensions: "30 cm each", weight: "800g", material: "Vinyl & Fabric", color: "Various" },
    tags: ["featured"], inStock: true, gender: "Girls", theme: "Princess"
  },
  {
    id: "TOY058", name: "Solar System Science Kit", description: "Build and paint your own glow-in-the-dark solar system model! Includes all 8 planets, stand, and fact book.",
    price: 899, originalPrice: 1499, discount: 40, category: "Educational", ageRange: "5-10 years", minAge: 6, maxAge: 10,
    images: [scienceKit], rating: 4.6, reviewCount: 134, stock: 45, brand: "ScienceWhiz",
    sku: "SC-002", features: ["8 planets", "Glow-in-the-dark paint", "Metal stand", "Fact book", "Paint brushes included"],
    specifications: { dimensions: "35 x 35 x 35 cm assembled", weight: "700g", material: "Foam & Paint", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex", theme: "Space"
  },
  {
    id: "TOY059", name: "Kids' Cooking Set - Pretend Play", description: "Complete pretend cooking set with pots, pans, utensils, and play food. Chef hat and apron included!",
    price: 999, originalPrice: 1699, discount: 41, category: "Educational", ageRange: "5-10 years", minAge: 4, maxAge: 8,
    images: [magicKit], rating: 4.4, reviewCount: 167, stock: 60, brand: "SmartKids",
    sku: "ED-013", features: ["30+ pieces", "Chef hat & apron", "Play food items", "Stainless steel look", "Storage box"],
    specifications: { dimensions: "35 x 25 x 15 cm", weight: "1.2kg", material: "ABS Plastic", color: "Silver/Red" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY060", name: "RC Helicopter with Gyro", description: "3.5 channel RC helicopter with built-in gyroscope for stable flight. LED lights and USB charging.",
    price: 1599, originalPrice: 2699, discount: 41, category: "Vehicles", ageRange: "5-10 years", minAge: 6, maxAge: 12,
    images: [drone], rating: 4.2, reviewCount: 98, stock: 35, brand: "SkyFlyer",
    sku: "RC-003", features: ["3.5 channel", "Gyroscope stabilizer", "LED lights", "USB charging", "15 min flight time"],
    specifications: { dimensions: "28 x 5 x 10 cm", weight: "200g", material: "Alloy & Plastic", batteryType: "Li-Po" },
    tags: [], inStock: true, gender: "Boys"
  },

  // ===== 10-15 YEARS (25 products) =====
  {
    id: "TOY016", name: "Advanced Robotics Kit - RoboGenius", description: "Build and program your own robot! 300+ parts, motors, sensors, and a beginner-friendly coding app. Create 10 different robot designs.",
    price: 4999, originalPrice: 7999, discount: 38, category: "Robots", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [roboticsKit], rating: 4.9, reviewCount: 123, stock: 20, brand: "RoboGenius",
    sku: "RB-001", features: ["300+ parts", "App-controlled via Bluetooth", "10 robot designs", "STEM certified", "Rechargeable motors"],
    specifications: { dimensions: "40 x 30 x 10 cm (box)", weight: "2.5kg", material: "ABS Plastic & Metal", batteryType: "Rechargeable" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY017", name: "Epic Conquest Strategy Game", description: "Epic strategy board game - conquer territories, build empires, and outsmart opponents! 2-4 players with 90-minute gameplay.",
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
    id: "TOY019", name: "RC Racing Drone with HD Camera", description: "High-performance racing drone with HD camera, auto-hover, headless mode, and 15-minute flight time.",
    price: 3999, originalPrice: 6499, discount: 38, category: "Electronic", ageRange: "10-15 years", minAge: 12, maxAge: 18,
    images: [drone], rating: 4.4, reviewCount: 98, stock: 15, brand: "SkyFlyer",
    sku: "EL-001", features: ["HD Camera", "Auto-hover mode", "Headless mode", "15min flight time", "Extra battery included"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "350g", material: "Carbon Fiber & Plastic", batteryType: "Li-Po" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY020", name: "Coding & Electronics Kit", description: "Learn programming hands-on! Build circuits, write code, and create 20 interactive projects with Arduino-based controller.",
    price: 2999, originalPrice: 4499, discount: 33, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [codingKit], rating: 4.6, reviewCount: 78, stock: 25, brand: "CodeKids",
    sku: "ED-003", features: ["20 projects", "Arduino-compatible", "LEDs, sensors & motors", "Online tutorials", "Beginner friendly"],
    specifications: { dimensions: "25 x 20 x 8 cm", weight: "800g", material: "Electronic Components", color: "Blue/Green" },
    tags: [], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY021", name: "Professional Art Easel Set", description: "Adjustable wooden art easel with 3 canvases, 24 acrylic paints, 10 brushes, and palette.",
    price: 2499, originalPrice: 3999, discount: 38, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [artEasel], rating: 4.5, reviewCount: 67, stock: 20, brand: "ArtStar",
    sku: "AC-002", features: ["Adjustable height", "3 canvases included", "24 acrylic paints", "10 professional brushes", "Palette included"],
    specifications: { dimensions: "60 x 40 x 150 cm", weight: "3kg", material: "Beech Wood", color: "Natural" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY032", name: "Kids Telescope - StarGazer", description: "Beginner telescope with 90x magnification. See the moon, planets, and stars! Includes star map, tripod, and phone adapter.",
    price: 3499, originalPrice: 5499, discount: 36, category: "Educational", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [telescope], rating: 4.5, reviewCount: 89, stock: 20, brand: "StarGazer",
    sku: "ED-005", features: ["90x magnification", "Sturdy tripod", "Star map included", "Phone adapter", "Carry case"],
    specifications: { dimensions: "45 x 10 x 10 cm", weight: "1.8kg", material: "Aluminum & Glass", color: "Silver/Black" },
    tags: ["featured"], inStock: true, gender: "Unisex", theme: "Space"
  },
  // New 10-15 products
  {
    id: "TOY061", name: "Crystal Growing Science Lab", description: "Grow 12 different colorful crystals! Complete chemistry kit with experiment guide and display domes.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 14,
    images: [scienceKit], rating: 4.6, reviewCount: 123, stock: 40, brand: "ScienceWhiz",
    sku: "SC-003", features: ["12 crystal types", "Display domes", "Safety equipment", "Full experiment guide", "Non-toxic chemicals"],
    specifications: { dimensions: "30 x 25 x 10 cm", weight: "900g", material: "Chemistry Kit", color: "Various" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY062", name: "DIY Leather Crafting Kit", description: "Learn leatherwork with pre-cut pieces, tools, and step-by-step projects. Make wallets, keychains, and bracelets!",
    price: 1499, originalPrice: 2499, discount: 40, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [artKit], rating: 4.3, reviewCount: 67, stock: 30, brand: "ArtStar",
    sku: "AC-005", features: ["Pre-cut leather", "Tools included", "5 projects", "Instruction manual", "Carry pouch"],
    specifications: { dimensions: "30 x 20 x 8 cm", weight: "600g", material: "Genuine Leather", color: "Brown" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY063", name: "Spy Gadget Electronics Kit", description: "Build 10 spy gadgets including alarm systems, motion detectors, and secret message devices. James Bond approved!",
    price: 2499, originalPrice: 3999, discount: 38, category: "Electronic", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [codingKit], rating: 4.5, reviewCount: 89, stock: 25, brand: "CodeKids",
    sku: "EL-003", features: ["10 gadget projects", "Motion sensor", "Laser tripwire", "Secret message encoder", "Instruction manual"],
    specifications: { dimensions: "30 x 25 x 10 cm", weight: "1kg", material: "Electronic Components", color: "Black" },
    tags: ["featured"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY064", name: "Table Tennis Pro Set", description: "Professional-grade table tennis set with 2 paddles, 6 balls, retractable net, and carry case. Play anywhere!",
    price: 1299, originalPrice: 2199, discount: 41, category: "Outdoor", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [cricketSet], rating: 4.4, reviewCount: 134, stock: 50, brand: "SportStar",
    sku: "SP-003", features: ["2 pro paddles", "6 balls", "Retractable net", "Carry case", "Any table compatible"],
    specifications: { dimensions: "Paddle: 26 x 15 cm", weight: "500g", material: "Wood & Rubber", color: "Red/Black" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY065", name: "Escape Room Board Game", description: "Solve puzzles, crack codes, and escape the room! 4 themed scenarios with increasing difficulty. Can you escape in 60 minutes?",
    price: 1599, originalPrice: 2499, discount: 36, category: "Board Games", ageRange: "10-15 years", minAge: 10, maxAge: 16,
    images: [strategyGame], rating: 4.7, reviewCount: 98, stock: 35, brand: "GameMasters",
    sku: "BG-005", features: ["4 scenarios", "60 min gameplay", "1-6 players", "Replayable with hints", "Difficulty levels"],
    specifications: { dimensions: "28 x 28 x 8 cm", weight: "700g", material: "Cardboard & Metal", color: "Dark Blue" },
    tags: ["trending"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY066", name: "3D Printer Pen with Filaments", description: "Create 3D drawings that come to life! Safe low-temp 3D pen with 10 colors of filament and stencil book.",
    price: 1899, originalPrice: 2999, discount: 37, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [codingKit], rating: 4.4, reviewCount: 78, stock: 30, brand: "TechGear",
    sku: "AC-006", features: ["Low-temp safe nozzle", "10 filament colors", "Stencil book", "USB rechargeable", "Speed control"],
    specifications: { dimensions: "20 x 3 x 3 cm", weight: "200g", material: "ABS & PLA", color: "Blue" },
    tags: [], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY067", name: "RC Racing Boat", description: "High-speed remote control boat with self-righting hull and waterproof motor. Races at 25km/h on lakes and pools!",
    price: 2299, originalPrice: 3799, discount: 39, category: "Vehicles", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [rcCar], rating: 4.3, reviewCount: 67, stock: 20, brand: "SpeedKing",
    sku: "RC-004", features: ["25km/h speed", "Self-righting hull", "Waterproof motor", "2.4GHz remote", "20 min run time"],
    specifications: { dimensions: "35 x 12 x 10 cm", weight: "600g", material: "ABS Plastic", batteryType: "Li-Po", color: "Red/White" },
    tags: [], inStock: true, gender: "Boys", theme: "Racing"
  },
  {
    id: "TOY068", name: "Microscope Lab Kit - 1200x", description: "Student microscope with 1200x magnification, prepared slides, blank slides, and experiment guide. Perfect for young scientists.",
    price: 2799, originalPrice: 4499, discount: 38, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [telescope], rating: 4.6, reviewCount: 89, stock: 20, brand: "ScienceWhiz",
    sku: "SC-004", features: ["1200x magnification", "LED illumination", "10 prepared slides", "Blank slides & covers", "Carry case"],
    specifications: { dimensions: "15 x 10 x 30 cm", weight: "1.5kg", material: "Metal & Glass", color: "Silver" },
    tags: ["bestseller"], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY069", name: "Skateboard with Safety Gear", description: "Complete skateboard starter pack with deck, helmet, knee pads, and elbow pads. Perfect for beginners!",
    price: 1999, originalPrice: 3499, discount: 43, category: "Outdoor", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [cricketSet], rating: 4.2, reviewCount: 112, stock: 30, brand: "SportStar",
    sku: "SP-004", features: ["Maple wood deck", "ABEC-7 bearings", "Helmet included", "Knee & elbow pads", "Carry bag"],
    specifications: { dimensions: "79 x 20 cm deck", weight: "3kg total", material: "Maple Wood & Polyurethane", color: "Graphic Print" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY070", name: "Calligraphy & Lettering Set", description: "Premium calligraphy set with 6 nib sizes, ink bottles, practice sheets, and guidebook. Master beautiful handwriting!",
    price: 999, originalPrice: 1699, discount: 41, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [sketchSet], rating: 4.5, reviewCount: 78, stock: 45, brand: "ArtPro",
    sku: "AC-007", features: ["6 nib sizes", "3 ink colors", "Practice sheets", "Guidebook", "Wooden pen holder"],
    specifications: { dimensions: "30 x 20 x 3 cm", weight: "400g", material: "Metal & Wood", color: "Gold/Black" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY071", name: "Mini Drone Racing Set", description: "Two mini racing drones with obstacle gates! Race against friends with built-in safety guards. Indoor-friendly.",
    price: 2999, originalPrice: 4999, discount: 40, category: "Electronic", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [drone], rating: 4.5, reviewCount: 67, stock: 15, brand: "SkyFlyer",
    sku: "EL-004", features: ["2 mini drones", "4 obstacle gates", "Safety guards", "LED lights", "Easy controls"],
    specifications: { dimensions: "10 x 10 x 5 cm each", weight: "100g each", material: "Plastic", batteryType: "Li-Po" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY072", name: "Stop Motion Animation Studio", description: "Create your own animated movies! Includes green screen, LED lights, phone mount, and characters. Free app included.",
    price: 1799, originalPrice: 2999, discount: 40, category: "Educational", ageRange: "10-15 years", minAge: 10, maxAge: 15,
    images: [codingKit], rating: 4.4, reviewCount: 56, stock: 25, brand: "SmartKids",
    sku: "ED-014", features: ["Green screen", "LED lights", "Phone mount", "6 characters", "Free editing app"],
    specifications: { dimensions: "30 x 25 x 10 cm", weight: "800g", material: "Various", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY073", name: "Football Training Set", description: "Size 5 football with training cones, agility ladder, pump, and training guide. Train like a pro!",
    price: 1499, originalPrice: 2499, discount: 40, category: "Outdoor", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [cricketSet], rating: 4.3, reviewCount: 145, stock: 40, brand: "SportStar",
    sku: "SP-005", features: ["Size 5 football", "10 training cones", "Agility ladder", "Ball pump", "Training guide"],
    specifications: { dimensions: "Football: 22 cm dia", weight: "2kg total", material: "PU Leather & Plastic", color: "White/Black" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY074", name: "Dungeons & Dragons Starter Set", description: "Begin your D&D adventure! Includes rulebook, dice set, pre-made characters, and a complete adventure campaign.",
    price: 1899, originalPrice: 2999, discount: 37, category: "Board Games", ageRange: "10-15 years", minAge: 10, maxAge: 16,
    images: [strategyGame], rating: 4.8, reviewCount: 78, stock: 25, brand: "GameMasters",
    sku: "BG-006", features: ["Rulebook", "Complete dice set", "5 pre-made characters", "Adventure campaign", "DM guide"],
    specifications: { dimensions: "25 x 20 x 8 cm", weight: "600g", material: "Paper & Dice", color: "Red" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY075", name: "Motorized Robot Arm Kit", description: "Build a programmable robotic arm with 5 axes of movement. Pick up, move, and place objects with precision!",
    price: 3499, originalPrice: 5499, discount: 36, category: "Robots", ageRange: "10-15 years", minAge: 12, maxAge: 15,
    images: [roboticsKit], rating: 4.7, reviewCount: 56, stock: 15, brand: "RoboGenius",
    sku: "RB-003", features: ["5 axes movement", "Gripper claw", "Programmable via USB", "LED indicators", "Tool-free assembly"],
    specifications: { dimensions: "30 x 20 x 40 cm", weight: "1.5kg", material: "ABS & Metal", batteryType: "4x AA" },
    tags: [], inStock: true, gender: "Unisex", theme: "STEM"
  },
  {
    id: "TOY076", name: "Tie-Dye Fashion Kit", description: "Create trendy tie-dye clothing! Kit includes 12 fabric dyes, rubber bands, gloves, and 3 white t-shirts.",
    price: 899, originalPrice: 1499, discount: 40, category: "Arts & Crafts", ageRange: "10-15 years", minAge: 8, maxAge: 15,
    images: [artKit], rating: 4.3, reviewCount: 134, stock: 50, brand: "ArtStar",
    sku: "AC-008", features: ["12 dye colors", "3 white t-shirts", "Rubber bands", "Protective gloves", "Pattern guide"],
    specifications: { dimensions: "25 x 20 x 10 cm", weight: "700g", material: "Fabric Dye & Cotton", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },

  // ===== 15-18 YEARS (25 products) =====
  {
    id: "TOY023", name: "Collector's Anime Figure", description: "Premium detailed anime figure with dynamic action pose and illuminated display base. Hand-painted with high-quality PVC.",
    price: 3499, originalPrice: 4999, discount: 30, category: "Action Figures", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [animeFigure], rating: 4.8, reviewCount: 89, stock: 10, brand: "FigureArts",
    sku: "AF-002", features: ["25cm tall", "Hand-painted details", "LED display base", "Collector's box", "Authenticity certificate"],
    specifications: { dimensions: "25 x 15 x 15 cm", weight: "500g", material: "PVC & ABS", color: "Multicolor" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Anime"
  },
  {
    id: "TOY024", name: "3D Metal Puzzle - Spaceship", description: "Intricate 3D metal puzzle of a sci-fi spaceship. 200+ stainless steel pieces that snap together without glue.",
    price: 1099, originalPrice: 1599, discount: 31, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [metalPuzzle], rating: 4.6, reviewCount: 56, stock: 50, brand: "MetalCraft",
    sku: "PZ-001", features: ["200+ metal pieces", "No glue needed", "Stainless steel", "Display stand included", "Detailed instructions"],
    specifications: { dimensions: "20 x 15 x 10 cm (assembled)", weight: "300g", material: "Stainless Steel", color: "Silver" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY025", name: "Smart Watch for Teens", description: "Feature-packed smart watch with fitness tracking, heart rate monitor, music control, and notifications. 7-day battery.",
    price: 2999, originalPrice: 4499, discount: 33, category: "Electronic", ageRange: "15-18 years", minAge: 13, maxAge: 18,
    images: [smartWatch], rating: 4.4, reviewCount: 234, stock: 40, brand: "TechGear",
    sku: "EL-002", features: ["Heart rate monitor", "Step counter & calories", "IP68 water resistant", "7-day battery life", "Bluetooth 5.0"],
    specifications: { dimensions: "4.4 x 3.8 x 1.2 cm", weight: "45g", material: "Aluminum & Silicone", color: "Black" },
    tags: ["bestseller", "trending"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY022", name: "Acoustic Guitar Starter Pack", description: "Full-size acoustic guitar with tuner, picks, strap, carry bag, and beginner lesson book.",
    price: 4499, originalPrice: 7499, discount: 40, category: "Musical", ageRange: "15-18 years", minAge: 10, maxAge: 18,
    images: [guitar], rating: 4.3, reviewCount: 112, stock: 15, brand: "TuneUp",
    sku: "MU-003", features: ["Full-size 38 inch", "Steel strings", "Digital tuner", "Carry bag", "Lesson book & picks"],
    specifications: { dimensions: "100 x 38 x 12 cm", weight: "2.2kg", material: "Basswood & Spruce", color: "Natural" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY026", name: "Pro Sketch & Drawing Set", description: "Professional-grade sketching set with 50 graphite pencils, charcoal sticks, blending tools, and premium A3 sketch pad.",
    price: 1699, originalPrice: 2699, discount: 37, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [sketchSet], rating: 4.7, reviewCount: 98, stock: 35, brand: "ArtPro",
    sku: "AC-003", features: ["50 graphite pencils (6H-12B)", "Charcoal set", "A3 premium sketch pad", "Eraser & blending tools", "Hard-shell carry case"],
    specifications: { dimensions: "35 x 25 x 5 cm", weight: "1.2kg", material: "Graphite & Paper", color: "Black" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY027", name: "Advanced Solar Robot Kit - 12 in 1", description: "Build 12 different robots with solar and battery power! Advanced STEM kit with metal parts.",
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
  // New 15-18 products
  {
    id: "TOY077", name: "Electric Ukulele Kit", description: "Electric ukulele with built-in pickup, portable amp, and online lesson access. Start making music in minutes!",
    price: 2999, originalPrice: 4999, discount: 40, category: "Musical", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [guitar], rating: 4.4, reviewCount: 78, stock: 20, brand: "TuneUp",
    sku: "MU-007", features: ["Built-in pickup", "Portable amp", "Online lessons", "Tuner included", "Carry bag"],
    specifications: { dimensions: "55 x 18 x 8 cm", weight: "800g", material: "Mahogany", color: "Sunburst" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY078", name: "Wireless Earbuds - Gaming Edition", description: "Low-latency gaming earbuds with RGB lights, noise cancellation, and 8-hour battery. Perfect for mobile gaming.",
    price: 1999, originalPrice: 3499, discount: 43, category: "Electronic", ageRange: "15-18 years", minAge: 13, maxAge: 18,
    images: [smartWatch], rating: 4.5, reviewCount: 189, stock: 50, brand: "TechGear",
    sku: "EL-005", features: ["40ms low latency", "Active noise cancellation", "RGB LED", "8hr battery", "IPX5 waterproof"],
    specifications: { dimensions: "6 x 4 x 3 cm case", weight: "55g", material: "ABS Plastic", color: "Black/RGB" },
    tags: ["trending", "bestseller"], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY079", name: "Premium Chess Set - Wooden", description: "Handcrafted wooden chess set with magnetic pieces and foldable board. Tournament-size with velvet lining.",
    price: 1499, originalPrice: 2499, discount: 40, category: "Board Games", ageRange: "15-18 years", minAge: 10, maxAge: 18,
    images: [strategyGame], rating: 4.7, reviewCount: 134, stock: 40, brand: "GameMasters",
    sku: "BG-007", features: ["Magnetic pieces", "Foldable board", "Velvet lining", "Tournament size", "Handcrafted"],
    specifications: { dimensions: "39 x 39 cm open", weight: "1.2kg", material: "Rosewood & Maple", color: "Brown/Ivory" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY080", name: "Astronomy Binoculars", description: "High-powered 20x50 binoculars for stargazing and nature observation. Includes tripod adapter and star chart.",
    price: 2499, originalPrice: 3999, discount: 38, category: "Educational", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [telescope], rating: 4.4, reviewCount: 67, stock: 25, brand: "StarGazer",
    sku: "ED-015", features: ["20x50 magnification", "BAK4 prisms", "Tripod adapter", "Star chart", "Carry case"],
    specifications: { dimensions: "20 x 15 x 8 cm", weight: "900g", material: "Metal & Glass", color: "Black" },
    tags: [], inStock: true, gender: "Unisex", theme: "Space"
  },
  {
    id: "TOY081", name: "Oil Painting Master Set", description: "Professional oil painting set with 36 colors, 3 canvases, palette knives, and tutorial booklet. Gallery-quality results!",
    price: 2799, originalPrice: 4499, discount: 38, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [artEasel], rating: 4.6, reviewCount: 56, stock: 20, brand: "ArtPro",
    sku: "AC-009", features: ["36 oil colors", "3 canvas boards", "Palette knives", "Tutorial booklet", "Wooden box"],
    specifications: { dimensions: "40 x 30 x 6 cm", weight: "2kg", material: "Oil Paint & Canvas", color: "Multicolor" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY082", name: "FPV Racing Drone Pro", description: "Advanced FPV racing drone with goggles, 4K camera, and racing gates. Fly at 80km/h with real-time video feed!",
    price: 8999, originalPrice: 12999, discount: 31, category: "Electronic", ageRange: "15-18 years", minAge: 16, maxAge: 18,
    images: [drone], rating: 4.8, reviewCount: 45, stock: 8, brand: "SkyFlyer",
    sku: "EL-006", features: ["FPV goggles included", "4K camera", "80km/h speed", "Racing gates", "Custom tuning"],
    specifications: { dimensions: "25 x 25 x 6 cm", weight: "400g", material: "Carbon Fiber", batteryType: "Li-Po 1500mAh" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "Tech", badge: "Premium"
  },
  {
    id: "TOY083", name: "Rubik's Speed Cube Collection", description: "Set of 5 speed cubes (2x2 to 6x6) with smooth magnetic mechanism. Includes timer and solve guide.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Puzzles", ageRange: "15-18 years", minAge: 10, maxAge: 18,
    images: [puzzleBox], rating: 4.6, reviewCount: 178, stock: 45, brand: "MetalCraft",
    sku: "PZ-003", features: ["5 cubes (2x2 to 6x6)", "Magnetic mechanism", "Stickerless design", "Timer included", "Solve algorithms book"],
    specifications: { dimensions: "Various", weight: "600g", material: "ABS Plastic", color: "Stickerless" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY084", name: "Beat Maker DJ Pad", description: "Electronic DJ pad with 16 velocity-sensitive pads, built-in effects, and USB connectivity. Create beats like a pro!",
    price: 3499, originalPrice: 5499, discount: 36, category: "Musical", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [keyboardPiano], rating: 4.5, reviewCount: 67, stock: 15, brand: "MelodyKids",
    sku: "MU-008", features: ["16 velocity pads", "Built-in effects", "USB MIDI", "Looper function", "Free software"],
    specifications: { dimensions: "25 x 20 x 3 cm", weight: "500g", material: "ABS Plastic", color: "Black" },
    tags: ["featured"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY085", name: "Archery Target Set", description: "Professional recurve bow with 6 arrows, arm guard, finger tab, and foam target. Great for competitive practice!",
    price: 3999, originalPrice: 6499, discount: 38, category: "Outdoor", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [cricketSet], rating: 4.3, reviewCount: 45, stock: 15, brand: "SportStar",
    sku: "SP-006", features: ["Recurve bow", "6 fiberglass arrows", "Arm guard", "Foam target", "Finger tab"],
    specifications: { dimensions: "120 cm bow", weight: "1.8kg total", material: "Fiberglass & Wood", color: "Black/Wood" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY086", name: "AI Coding Robot - RoboMind", description: "Advanced AI robot that learns and adapts. Program with Python, teach it voice commands, and watch it navigate obstacles.",
    price: 9999, originalPrice: 14999, discount: 33, category: "Robots", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [stemRobot], rating: 4.9, reviewCount: 34, stock: 8, brand: "RoboGenius",
    sku: "RB-004", features: ["Python programmable", "Voice recognition", "Object detection", "Wi-Fi enabled", "Camera module"],
    specifications: { dimensions: "25 x 15 x 20 cm", weight: "1.5kg", material: "Metal & Plastic", batteryType: "Li-ion 5000mAh" },
    tags: ["trending"], inStock: true, gender: "Unisex", theme: "STEM", badge: "Premium"
  },
  {
    id: "TOY087", name: "Catan Strategy Board Game", description: "Classic resource-trading strategy game. Build settlements, trade resources, and compete to dominate the island!",
    price: 2499, originalPrice: 3999, discount: 38, category: "Board Games", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [boardGame], rating: 4.8, reviewCount: 234, stock: 30, brand: "GameMasters",
    sku: "BG-008", features: ["3-4 players", "75 min gameplay", "Modular board", "Trading mechanic", "Expansion compatible"],
    specifications: { dimensions: "30 x 30 x 8 cm", weight: "1kg", material: "Cardboard & Wood", color: "Multicolor" },
    tags: ["bestseller"], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY088", name: "Digital Drawing Tablet", description: "10-inch drawing tablet with battery-free stylus, 8192 pressure levels. Compatible with Photoshop, Illustrator, and more.",
    price: 4999, originalPrice: 7999, discount: 38, category: "Electronic", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [smartWatch], rating: 4.6, reviewCount: 89, stock: 20, brand: "TechGear",
    sku: "EL-007", features: ["10 inch active area", "8192 pressure levels", "Battery-free stylus", "Tilt support", "8 hotkeys"],
    specifications: { dimensions: "30 x 20 x 1 cm", weight: "450g", material: "Plastic & Glass", color: "Black" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY089", name: "Leather Journal & Pen Set", description: "Handcrafted leather journal with refillable pages, bookmark, and premium metal fountain pen. Perfect for creative writing.",
    price: 1199, originalPrice: 1999, discount: 40, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [sketchSet], rating: 4.5, reviewCount: 98, stock: 40, brand: "ArtPro",
    sku: "AC-010", features: ["Genuine leather", "200 refillable pages", "Metal fountain pen", "Bookmark ribbon", "Gift box"],
    specifications: { dimensions: "21 x 15 x 3 cm", weight: "400g", material: "Leather & Paper", color: "Dark Brown" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY090", name: "Portable Bluetooth Speaker", description: "Waterproof Bluetooth speaker with 360° sound, LED light show, and 12-hour battery. Perfect party companion!",
    price: 1799, originalPrice: 2999, discount: 40, category: "Electronic", ageRange: "15-18 years", minAge: 13, maxAge: 18,
    images: [smartWatch], rating: 4.4, reviewCount: 267, stock: 50, brand: "TechGear",
    sku: "EL-008", features: ["360° sound", "IPX7 waterproof", "LED light show", "12hr battery", "TWS pairing"],
    specifications: { dimensions: "8 x 8 x 15 cm", weight: "350g", material: "ABS & Silicone", color: "Black" },
    tags: [], inStock: true, gender: "Unisex", theme: "Tech"
  },
  {
    id: "TOY091", name: "3D Metal Puzzle - Motorcycle", description: "Detailed metal model motorcycle puzzle with 300+ stainless steel pieces. A stunning display piece when completed.",
    price: 1399, originalPrice: 2199, discount: 36, category: "Puzzles", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [metalPuzzle], rating: 4.5, reviewCount: 45, stock: 35, brand: "MetalCraft",
    sku: "PZ-004", features: ["300+ pieces", "Stainless steel", "No glue required", "Display stand", "Detailed instructions"],
    specifications: { dimensions: "18 x 8 x 10 cm assembled", weight: "350g", material: "Stainless Steel", color: "Silver" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY092", name: "Harmonica Pro Set", description: "Set of 3 professional harmonicas in keys C, D, and G. Includes lessons booklet and carry pouch. Rich, warm tone.",
    price: 1299, originalPrice: 2199, discount: 41, category: "Musical", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [keyboardPiano], rating: 4.3, reviewCount: 56, stock: 30, brand: "TuneUp",
    sku: "MU-009", features: ["3 harmonicas (C, D, G)", "Phosphor bronze reeds", "Lesson booklet", "Carry pouch", "Rich warm tone"],
    specifications: { dimensions: "10 x 3 x 2 cm each", weight: "200g total", material: "Stainless Steel & Brass", color: "Silver" },
    tags: [], inStock: true, gender: "Unisex"
  },
  {
    id: "TOY093", name: "Badminton Pro Tournament Set", description: "Tournament-grade badminton set with carbon fiber rackets, feather shuttlecocks, and professional carry bag.",
    price: 2499, originalPrice: 3999, discount: 38, category: "Outdoor", ageRange: "15-18 years", minAge: 12, maxAge: 18,
    images: [cricketSet], rating: 4.5, reviewCount: 89, stock: 25, brand: "SportStar",
    sku: "SP-007", features: ["Carbon fiber rackets", "6 feather shuttles", "Pro carry bag", "Grip tape included", "Tournament grade"],
    specifications: { dimensions: "68 cm racket", weight: "400g total", material: "Carbon Fiber & Nylon", color: "Black/Neon" },
    tags: [], inStock: true, gender: "Unisex", theme: "Sports"
  },
  {
    id: "TOY094", name: "Resin Art Starter Kit", description: "Complete epoxy resin art kit with 12 pigment colors, molds, glitter, and dried flowers. Create stunning art pieces!",
    price: 1699, originalPrice: 2799, discount: 39, category: "Arts & Crafts", ageRange: "15-18 years", minAge: 14, maxAge: 18,
    images: [artKit], rating: 4.4, reviewCount: 78, stock: 30, brand: "ArtPro",
    sku: "AC-011", features: ["Epoxy resin & hardener", "12 pigment colors", "Silicone molds", "Glitter & dried flowers", "Instruction guide"],
    specifications: { dimensions: "30 x 25 x 10 cm", weight: "1.5kg", material: "Epoxy Resin", color: "Clear/Multicolor" },
    tags: ["featured"], inStock: true, gender: "Unisex"
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
  "Smart Watch", "Guitar", "Chess", "Skateboard", "3D Pen",
];

export const themes = [
  { name: "Superheroes", emoji: "🦸", count: 2 },
  { name: "Dinosaurs", emoji: "🦕", count: 2 },
  { name: "STEM", emoji: "🔬", count: 8 },
  { name: "Princess", emoji: "👸", count: 3 },
  { name: "Racing", emoji: "🏎️", count: 5 },
  { name: "Space", emoji: "🚀", count: 3 },
  { name: "Anime", emoji: "⚡", count: 1 },
  { name: "Sports", emoji: "🏏", count: 6 },
  { name: "Tech", emoji: "💻", count: 6 },
  { name: "Architecture", emoji: "🏛️", count: 1 },
];
