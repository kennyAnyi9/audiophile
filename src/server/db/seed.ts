import { config } from "dotenv";
import { db } from "./index";
import { products, users } from "./schema";

// Load environment variables
config({ path: ".env.local" });

const audiophileProducts = [
  {
    name: "YX1 Wireless Earphones",
    slug: "yx1-wireless-earphones",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: "599.00",
    category: "earphones" as const,
    new: true,
    features: [
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort.",
      "Innovative acoustic technology delivers unrivalled stereo sound with improved ergonomics designed for full day wearing. These revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort.",
      "The YX1 Wireless Earphones feature customizable EQ settings that allow you to fine-tune your listening experience to your personal preferences. Whether you prefer bass-heavy tracks or crystal-clear highs, these earphones adapt to your unique taste."
    ],
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      }
    ],
    image: {
      mobile: "/product-yx1-earphones/mobile/image-product.jpg",
      tablet: "/product-yx1-earphones/tablet/image-product.jpg",
      desktop: "/product-yx1-earphones/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/product-yx1-earphones/mobile/image-category-page-preview.jpg",
      tablet: "/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      desktop: "/product-yx1-earphones/desktop/image-category-page-preview.jpg"
    }
  },
  {
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-two-headphones",
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: "2999.00",
    category: "headphones" as const,
    new: true,
    features: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who enjoy long listening sessions. For added convenience, the headphones are equipped with a 3.5mm cable for wired listening.",
      "Industry-leading active noise cancellation technology lets you listen to your music without distractions, whether you're at home, at work, or on the go. The XX99 Mark II headphones feature 40mm drivers that deliver rich, detailed sound with deep bass and crystal-clear highs.",
      "Built-in voice assistant compatibility allows you to control your music, make calls, and get information hands-free. The headphones also feature touch controls for easy operation and a quick-charge function that provides 3 hours of playback from just 10 minutes of charging."
    ],
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      }
    ],
    image: {
      mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
      desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
    }
  },
  {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: "4500.00",
    category: "speakers" as const,
    new: true,
    features: [
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo 3.5mm inputs, so you can have up to 5 wired source connections at a time.",
      "Wirelessly connect with Bluetooth 5.0, or use the included 3.5mm aux cable. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo 3.5mm inputs, so you can have up to 5 wired source connections at a time.",
      "The ZX9 features a built-in 175 watt amplifier with Class D technology that delivers clean, efficient power to drive the 5.25-inch woofer and 1-inch dome tweeter. Precision-designed ported enclosure produces controlled bass response and minimizes distortion."
    ],
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "10m optical cable" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx7-speaker.jpg"
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      }
    ],
    image: {
      mobile: "/assets/product-zx9-speaker/mobile/image-product.jpg",
      tablet: "/assets/product-zx9-speaker/tablet/image-product.jpg",
      desktop: "/assets/product-zx9-speaker/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
    }
  },
  {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the perfect balance of exceptional sound quality and stylish design.",
    price: "3500.00",
    category: "speakers" as const,
    new: false,
    features: [
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound.",
      "You can connect to the ZX7 via Bluetooth or aux cable. The high-quality DAC will enhance your music experience. The ZX7 speaker uses high-end audiophile components that represents the perfect balance of exceptional sound quality and stylish design.",
      "Designed for both home and professional use, the ZX7 delivers room-filling sound with remarkable clarity. The speaker features a solid aluminum construction with a unique finish that complements any modern interior design."
    ],
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      }
    ],
    image: {
      mobile: "/assets/product-zx7-speaker/mobile/image-product.jpg",
      tablet: "/assets/product-zx7-speaker/tablet/image-product.jpg",
      desktop: "/assets/product-zx7-speaker/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
    }
  },
  {
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-one-headphones",
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: "1750.00",
    category: "headphones" as const,
    new: false,
    features: [
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. These headphones are built from the finest materials to deliver comfort and durability.",
      "The XX99 Mark I features closed-back design for natural, accurate sound reproduction. The 50mm drivers deliver rich, detailed sound with deep bass and crystal-clear highs. Perfect for critical listening sessions and professional mixing.",
      "Professional-grade build quality ensures these headphones will withstand heavy use. The detachable cable system allows for easy replacement and the foldable design makes them perfect for travel."
    ],
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      }
    ],
    image: {
      mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
      desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
    }
  },
  {
    name: "XX59 Headphones",
    slug: "xx59-headphones",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless design eliminates tangled wires and delivers sublime sound quality.",
    price: "899.00",
    category: "headphones" as const,
    new: false,
    features: [
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio enthusiasts.",
      "Easy-to-use controls, allow you to replay or skip tracks, answer calls, and adjust volume, all with the touch of a button. The XX59 headphones give you the freedom to listen to your music without limitations.",
      "Experience the convenience of wireless listening with up to 30 hours of battery life. Quick charge technology provides 3 hours of playback from just 10 minutes of charging."
    ],
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" }
    ],
    gallery: {
      first: {
        mobile: "/assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
      },
      second: {
        mobile: "/assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
      },
      third: {
        mobile: "/assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
      }
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg"
        }
      }
    ],
    image: {
      mobile: "/assets/product-xx59-headphones/mobile/image-product.jpg",
      tablet: "/assets/product-xx59-headphones/tablet/image-product.jpg",
      desktop: "/assets/product-xx59-headphones/desktop/image-product.jpg"
    },
    categoryImage: {
      mobile: "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
    }
  }
];

const adminUser = {
  id: "admin-user-001",
  email: "admin@audiophile.com",
  name: "Admin User",
  password: "$2b$10$8K9lQ5H0Zn1ZXmFrZYs8EuHXvCjD3FgHzKlOeVbNmQaZrTyWs7Ie6", // password: "admin123"
  emailVerified: true,
  role: "admin" as const
};

async function seed() {
  try {
    console.log("🌱 Starting database seed...");

    // Clear existing data
    await db.delete(products);
    await db.delete(users);
    console.log("🧹 Cleared existing data");

    // Insert admin user
    await db.insert(users).values(adminUser);
    console.log("👤 Admin user created");

    // Insert products
    await db.insert(products).values(audiophileProducts);
    console.log(`🎧 ${audiophileProducts.length} products inserted`);

    console.log("✅ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seed().catch(console.error);