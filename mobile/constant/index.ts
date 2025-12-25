import { Banner1, Banner2, Banner3 } from "@/assets";

export const products = [
  {
    id: "book_001",
    type: "book",
    title: "Mastering JavaScript",
    slug: "mastering-javascript",
    author: "John Doe",
    publisher: "Tech Books Ltd",
    isbn: "978-1-23456-789-0",
    language: "English",
    tags: ["javascript", "programming", "books"],
    description: "A complete guide to modern JavaScript development.",
    options: [
      {
        id: "opt_format",
        name: "Format",
        values: ["Paperback", "Hardcover"],
      },
      {
        id: "opt_size",
        name: "Size",
        values: ["A5", "A4"],
      },
    ],
    variants: [
      {
        id: "var_001",
        product_id: "book_001",
        title: "Paperback / A5",
        sku: "BOOK-JS-PB-A5",
        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Paperback",
          },
          { option_id: "opt_size", name: "Size", value: "A5" },
        ],
        price: 20,
        compare_at_price: 25,
        inventory: {
          quantity: 100,
          track_inventory: true,
        },
        pages: 320,
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },
      {
        id: "var_002",
        product_id: "book_001",
        title: "Paperback / A4",
        sku: "BOOK-JS-PB-A4",
        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Paperback",
          },
          { option_id: "opt_size", name: "Size", value: "A4" },
        ],
        price: 25,
        compare_at_price: 30,
        inventory: {
          quantity: 60,
          track_inventory: true,
        },
        pages: 320,
        package: {
          weight: 0.7,
          weight_unit: "kg",
          dimensions: {
            length: 29.7,
            width: 21,
            height: 2.5,
          },
          dimension_unit: "cm",
        },

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },

      {
        id: "var_003",
        product_id: "book_001",
        title: "Hardcover / A5",
        sku: "BOOK-JS-HC-A5",

        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Hardcover",
          },
          { option_id: "opt_size", name: "Size", value: "A5" },
        ],

        price: 30,
        compare_at_price: 35,

        inventory: {
          quantity: 40,
          track_inventory: true,
        },

        pages: 320,

        package: {
          weight: 0.9,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 3.0,
          },
          dimension_unit: "cm",
        },

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },
    ],

    images: [
      {
        id: "img_001",
        url: "https://m.media-amazon.com/images/I/81A-mvS6kkL.jpg",
        alt: "Mastering JavaScript Book Cover",
      },
    ],

    categories: ["programming", "javascript", "books"],

    status: "active",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
  {
    id: "book_002",
    type: "book",

    title: "Mastering JavaScript",
    slug: "mastering-javascript",

    author: "John Doe",
    publisher: "Tech Books Ltd",
    isbn: "978-1-23456-789-0",
    language: "English",
    tags: ["javascript", "programming", "books"],

    description: "A complete guide to modern JavaScript development.",

    options: [
      {
        id: "opt_format",
        name: "Format",
        values: ["Paperback", "Hardcover"],
      },
      {
        id: "opt_size",
        name: "Size",
        values: ["A5", "A4"],
      },
    ],

    variants: [
      {
        id: "var_001",
        product_id: "book_001",
        title: "Paperback / A5",
        sku: "BOOK-JS-PB-A5",

        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Paperback",
          },
          { option_id: "opt_size", name: "Size", value: "A5" },
        ],

        price: 20,
        compare_at_price: 25,

        inventory: {
          quantity: 100,
          track_inventory: true,
        },

        pages: 320,

        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },

      {
        id: "var_002",
        product_id: "book_001",
        title: "Paperback / A4",
        sku: "BOOK-JS-PB-A4",

        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Paperback",
          },
          { option_id: "opt_size", name: "Size", value: "A4" },
        ],

        price: 25,
        compare_at_price: 30,

        inventory: {
          quantity: 60,
          track_inventory: true,
        },

        pages: 320,

        package: {
          weight: 0.7,
          weight_unit: "kg",
          dimensions: {
            length: 29.7,
            width: 21,
            height: 2.5,
          },
          dimension_unit: "cm",
        },

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },

      {
        id: "var_003",
        product_id: "book_001",
        title: "Hardcover / A5",
        sku: "BOOK-JS-HC-A5",

        option_values: [
          {
            option_id: "opt_format",
            name: "Format",
            value: "Hardcover",
          },
          { option_id: "opt_size", name: "Size", value: "A5" },
        ],

        price: 30,
        compare_at_price: 35,

        inventory: {
          quantity: 40,
          track_inventory: true,
        },

        pages: 320,

        package: {
          weight: 0.9,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 3.0,
          },
          dimension_unit: "cm",
        },

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },
    ],

    images: [
      {
        id: "img_001",
        url: "https://m.media-amazon.com/images/I/81A-mvS6kkL.jpg",
        alt: "Mastering JavaScript Book Cover",
      },
    ],

    categories: ["programming", "javascript", "books"],

    status: "active",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
  {
    id: "book_003",
    type: "book",
    title: "The Midnight Library",
    slug: "the-midnight-library",
    author: "Matt Haig",
    publisher: "Canongate Books",
    isbn: "978-1-78689-270-6",
    language: "English",
    tags: ["fiction", "fantasy", "novels"],
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever.",
    options: [
      {
        id: "opt_format_3",
        name: "Format",
        values: ["Paperback", "Hardcover"],
      },
      { id: "opt_size_3", name: "Size", values: ["A5"] },
    ],
    variants: [
      {
        id: "var_004",
        product_id: "book_003",
        title: "Paperback / A5",
        sku: "BOOK-ML-PB-A5",
        option_values: [
          { option_id: "opt_format_3", name: "Format", value: "Paperback" },
          { option_id: "opt_size_3", name: "Size", value: "A5" },
        ],
        price: 15,
        compare_at_price: 18,
        inventory: { quantity: 150, track_inventory: true },
        pages: 288,
        package: {
          weight: 0.3,
          weight_unit: "kg",
          dimensions: { length: 20, width: 13, height: 1.8 },
          dimension_unit: "cm",
        },
        status: "active",
        createdAt: "2024-02-15T10:00:00Z",
        updatedAt: "2024-02-15T10:00:00Z",
      },
    ],
    images: [
      {
        id: "img_003",
        url: "https://m.media-amazon.com/images/I/81XmS5-6IuL.jpg",
        alt: "The Midnight Library",
      },
    ],
    categories: ["novels", "sad"],
    status: "active",
    createdAt: "2024-02-15T10:00:00Z",
    updatedAt: "2024-02-15T10:00:00Z",
  },
  {
    id: "book_004",
    type: "book",
    title: "Brief Answers to the Big Questions",
    slug: "brief-answers",
    author: "Stephen Hawking",
    publisher: "John Murray",
    isbn: "978-1-47369-598-6",
    language: "English",
    tags: ["science", "physics", "non-fiction"],
    description: "The final book from the world's most brilliant mind.",
    options: [
      { id: "opt_format_4", name: "Format", values: ["Hardcover"] },
      { id: "opt_size_4", name: "Size", values: ["A5"] },
    ],
    variants: [
      {
        id: "var_005",
        product_id: "book_004",
        title: "Hardcover / A5",
        sku: "BOOK-SH-HC-A5",
        option_values: [
          { option_id: "opt_format_4", name: "Format", value: "Hardcover" },
          { option_id: "opt_size_4", name: "Size", value: "A5" },
        ],
        price: 45,
        compare_at_price: 55,
        inventory: { quantity: 80, track_inventory: true },
        pages: 256,
        package: {
          weight: 0.5,
          weight_unit: "kg",
          dimensions: { length: 21, width: 14, height: 2.5 },
          dimension_unit: "cm",
        },
        status: "active",
        createdAt: "2024-03-01T10:00:00Z",
        updatedAt: "2024-03-01T10:00:00Z",
      },
    ],
    images: [
      {
        id: "img_004",
        url: "https://m.media-amazon.com/images/I/91-7688WAnL.jpg",
        alt: "Brief Answers",
      },
    ],
    categories: ["science"],
    status: "active",
    createdAt: "2024-03-01T10:00:00Z",
    updatedAt: "2024-03-01T10:00:00Z",
  },
  {
    id: "book_005",
    type: "book",
    title: "Deep Work",
    slug: "deep-work",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    isbn: "978-1-45558-669-1",
    language: "English",
    tags: ["productivity", "focus", "self-help"],
    description: "Rules for focused success in a distracted world.",
    options: [
      { id: "opt_format_5", name: "Format", values: ["Paperback"] },
      { id: "opt_size_5", name: "Size", values: ["A5"] },
    ],
    variants: [
      {
        id: "var_006",
        product_id: "book_005",
        title: "Paperback / A5",
        sku: "BOOK-CN-PB-A5",
        option_values: [
          { option_id: "opt_format_5", name: "Format", value: "Paperback" },
          { option_id: "opt_size_5", name: "Size", value: "A5" },
        ],
        price: 35,
        compare_at_price: 40,
        inventory: { quantity: 120, track_inventory: true },
        pages: 304,
        package: {
          weight: 0.4,
          weight_unit: "kg",
          dimensions: { length: 20, width: 14, height: 2.0 },
          dimension_unit: "cm",
        },
        status: "active",
        createdAt: "2024-04-10T10:00:00Z",
        updatedAt: "2024-04-10T10:00:00Z",
      },
    ],
    images: [
      {
        id: "img_005",
        url: "https://m.media-amazon.com/images/I/81JJ9N5K+bL.jpg",
        alt: "Deep Work",
      },
    ],
    categories: ["self love", "others"],
    status: "active",
    createdAt: "2024-04-10T10:00:00Z",
    updatedAt: "2024-04-10T10:00:00Z",
  },
  {
    id: "book_006",
    type: "book",
    title: "The Silent Patient",
    slug: "the-silent-patient",
    author: "Alex Michaelides",
    publisher: "Celadon Books",
    isbn: "978-1-25030-169-7",
    language: "English",
    tags: ["thriller", "mystery", "fiction"],
    description: "Alicia Berenson’s life is seemingly perfect.",
    options: [
      {
        id: "opt_format_6",
        name: "Format",
        values: ["Paperback", "Hardcover"],
      },
      { id: "opt_size_6", name: "Size", values: ["A5"] },
    ],
    variants: [
      {
        id: "var_007",
        product_id: "book_006",
        title: "Hardcover / A5",
        sku: "BOOK-AM-HC-A5",
        option_values: [
          { option_id: "opt_format_6", name: "Format", value: "Hardcover" },
          { option_id: "opt_size_6", name: "Size", value: "A5" },
        ],
        price: 55,
        compare_at_price: 65,
        inventory: { quantity: 45, track_inventory: true },
        pages: 336,
        package: {
          weight: 0.6,
          weight_unit: "kg",
          dimensions: { length: 22, width: 15, height: 2.8 },
          dimension_unit: "cm",
        },
        status: "active",
        createdAt: "2024-05-20T10:00:00Z",
        updatedAt: "2024-05-20T10:00:00Z",
      },
    ],
    images: [
      {
        id: "img_006",
        url: "https://m.media-amazon.com/images/I/81JJ7fce7dL.jpg",
        alt: "The Silent Patient",
      },
    ],
    categories: ["action", "others"],
    status: "active",
    createdAt: "2024-05-20T10:00:00Z",
    updatedAt: "2024-05-20T10:00:00Z",
  },
];

export const authors = [
  {
    id: "auth_001",
    name: "John Doe",
    dob: "1985-05-20",
    location: "San Francisco, USA",
    bio: "John Doe is a software engineer and author specializing in modern web technologies. With over 15 years of experience, he has written several best-selling books on JavaScript and architecture.",
    image: "https://i.pravatar.cc/150?u=auth_001",
    followers: "12.5k",
    rating: 4.8,
    socials: {
      twitter: "@johndoe",
      instagram: "@johndoe_tech",
      website: "https://johndoe.dev",
    },
  },
  {
    id: "auth_002",
    name: "Matt Haig",
    dob: "1975-07-03",
    location: "Sheffield, UK",
    bio: "Matt Haig is a British author and journalist. He has written fiction and non-fiction for children and adults, often focusing on mental health and speculative themes.",
    image: "https://i.pravatar.cc/150?u=auth_002",
    followers: "45k",
    rating: 4.9,
    socials: {
      twitter: "@matthaig1",
      instagram: "@mattzhaig",
      website: "https://matthaig.com",
    },
  },
  {
    id: "auth_003",
    name: "Stephen Hawking",
    dob: "1942-01-08",
    location: "Oxford, UK",
    bio: "Stephen Hawking was an English theoretical physicist, cosmologist, and author. His work on black holes and the origins of the universe changed our understanding of the cosmos.",
    image: "https://i.pravatar.cc/150?u=auth_003",
    followers: "2M+",
    rating: 5.0,
    socials: {
      twitter: "@stephenhawking",
      website: "https://hawking.org.uk",
    },
  },
  {
    id: "auth_004",
    name: "Cal Newport",
    dob: "1982-06-23",
    location: "Washington, D.C., USA",
    bio: "Cal Newport is a computer science professor and author who writes about the impact of technology on society and how to perform deep, focused work in a distracted world.",
    image: "https://i.pravatar.cc/150?u=auth_004",
    followers: "85k",
    rating: 4.7,
    socials: {
      twitter: "@calnewport",
      website: "https://calnewport.com",
    },
  },
  {
    id: "auth_005",
    name: "Alex Michaelides",
    dob: "1977-09-04",
    location: "Cyprus / London",
    bio: "Alex Michaelides is a British-Cypriot author and screenwriter. His debut novel, The Silent Patient, was a #1 New York Times bestseller.",
    image: "https://i.pravatar.cc/150?u=auth_005",
    followers: "32k",
    rating: 4.6,
    socials: {
      instagram: "@alex.michaelides",
      website: "https://alexmichaelides.com",
    },
  },
];

export const notifications = [
  {
    id: 1,
    title: "New Collection Arrived!",
    message:
      "Discover our latest 'Summer Romance' collection carefully curated for you.",
    time: "2m ago",
    read: false,
    icon: "heart-circle",
    color: "#E11D48",
  },
  {
    id: 2,
    title: "Price Drop Alert",
    message: "The 'Sci-Fi Classics' bundle is now 20% off for a limited time.",
    time: "1h ago",
    read: false,
    icon: "pricetag",
    color: "#1DB954",
  },
  {
    id: 3,
    title: "Recommendation",
    message:
      "Based on your reading history, we think you'll love 'The Silent Patient'.",
    time: "3h ago",
    read: true,
    icon: "book",
    color: "#3B82F6",
  },
  {
    id: 4,
    title: "Weekend Special",
    message: "Get double points on all thriller purchases this weekend!",
    time: "1d ago",
    read: true,
    icon: "star",
    color: "#F59E0B",
  },
];

export const collections = [
  {
    collection_id: "#46576581",
    image: Banner1,
    title: "Pride and Prejudice",
    description:
      "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring.",
    category: "Romance",
    price: "$12.99",
    products: [
      {
        id: "book_001",
        type: "book",
        title: "Mastering JavaScript",
        slug: "mastering-javascript",
        author: "John Doe",
        publisher: "Tech Books Ltd",
        isbn: "978-1-23456-789-0",
        language: "English",
        tags: ["javascript", "programming", "books"],
        description: "A complete guide to modern JavaScript development.",
        options: [
          {
            id: "opt_format",
            name: "Format",
            values: ["Paperback", "Hardcover"],
          },
          {
            id: "opt_size",
            name: "Size",
            values: ["A5", "A4"],
          },
        ],
        variants: [
          {
            id: "var_001",
            product_id: "book_001",
            title: "Paperback / A5",
            sku: "BOOK-JS-PB-A5",
            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Paperback",
              },
              { option_id: "opt_size", name: "Size", value: "A5" },
            ],
            price: 20,
            compare_at_price: 25,
            inventory: {
              quantity: 100,
              track_inventory: true,
            },
            pages: 320,
            package: {
              weight: 0.45,
              weight_unit: "kg",
              dimensions: {
                length: 21,
                width: 14.8,
                height: 2.2,
              },
              dimension_unit: "cm",
            },
            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },
          {
            id: "var_002",
            product_id: "book_001",
            title: "Paperback / A4",
            sku: "BOOK-JS-PB-A4",
            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Paperback",
              },
              { option_id: "opt_size", name: "Size", value: "A4" },
            ],
            price: 25,
            compare_at_price: 30,
            inventory: {
              quantity: 60,
              track_inventory: true,
            },
            pages: 320,
            package: {
              weight: 0.7,
              weight_unit: "kg",
              dimensions: {
                length: 29.7,
                width: 21,
                height: 2.5,
              },
              dimension_unit: "cm",
            },

            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },

          {
            id: "var_003",
            product_id: "book_001",
            title: "Hardcover / A5",
            sku: "BOOK-JS-HC-A5",

            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Hardcover",
              },
              { option_id: "opt_size", name: "Size", value: "A5" },
            ],

            price: 30,
            compare_at_price: 35,

            inventory: {
              quantity: 40,
              track_inventory: true,
            },

            pages: 320,

            package: {
              weight: 0.9,
              weight_unit: "kg",
              dimensions: {
                length: 21,
                width: 14.8,
                height: 3.0,
              },
              dimension_unit: "cm",
            },

            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },
        ],

        images: [
          {
            id: "img_001",
            url: "https://m.media-amazon.com/images/I/81A-mvS6kkL.jpg",
            alt: "Mastering JavaScript Book Cover",
          },
        ],

        categories: ["programming", "javascript", "books"],

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },
      {
        id: "book_002",
        type: "book",

        title: "Mastering JavaScript",
        slug: "mastering-javascript",

        author: "John Doe",
        publisher: "Tech Books Ltd",
        isbn: "978-1-23456-789-0",
        language: "English",
        tags: ["javascript", "programming", "books"],

        description: "A complete guide to modern JavaScript development.",

        options: [
          {
            id: "opt_format",
            name: "Format",
            values: ["Paperback", "Hardcover"],
          },
          {
            id: "opt_size",
            name: "Size",
            values: ["A5", "A4"],
          },
        ],

        variants: [
          {
            id: "var_001",
            product_id: "book_001",
            title: "Paperback / A5",
            sku: "BOOK-JS-PB-A5",

            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Paperback",
              },
              { option_id: "opt_size", name: "Size", value: "A5" },
            ],

            price: 20,
            compare_at_price: 25,

            inventory: {
              quantity: 100,
              track_inventory: true,
            },

            pages: 320,

            package: {
              weight: 0.45,
              weight_unit: "kg",
              dimensions: {
                length: 21,
                width: 14.8,
                height: 2.2,
              },
              dimension_unit: "cm",
            },

            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },

          {
            id: "var_002",
            product_id: "book_001",
            title: "Paperback / A4",
            sku: "BOOK-JS-PB-A4",

            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Paperback",
              },
              { option_id: "opt_size", name: "Size", value: "A4" },
            ],

            price: 25,
            compare_at_price: 30,

            inventory: {
              quantity: 60,
              track_inventory: true,
            },

            pages: 320,

            package: {
              weight: 0.7,
              weight_unit: "kg",
              dimensions: {
                length: 29.7,
                width: 21,
                height: 2.5,
              },
              dimension_unit: "cm",
            },

            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },

          {
            id: "var_003",
            product_id: "book_001",
            title: "Hardcover / A5",
            sku: "BOOK-JS-HC-A5",

            option_values: [
              {
                option_id: "opt_format",
                name: "Format",
                value: "Hardcover",
              },
              { option_id: "opt_size", name: "Size", value: "A5" },
            ],

            price: 30,
            compare_at_price: 35,

            inventory: {
              quantity: 40,
              track_inventory: true,
            },

            pages: 320,

            package: {
              weight: 0.9,
              weight_unit: "kg",
              dimensions: {
                length: 21,
                width: 14.8,
                height: 3.0,
              },
              dimension_unit: "cm",
            },

            status: "active",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z",
          },
        ],

        images: [
          {
            id: "img_001",
            url: "https://m.media-amazon.com/images/I/81A-mvS6kkL.jpg",
            alt: "Mastering JavaScript Book Cover",
          },
        ],

        categories: ["programming", "javascript", "books"],

        status: "active",
        createdAt: "2024-01-10T10:00:00Z",
        updatedAt: "2024-01-10T10:00:00Z",
      },
      {
        id: "book_003",
        type: "book",
        title: "The Midnight Library",
        slug: "the-midnight-library",
        author: "Matt Haig",
        publisher: "Canongate Books",
        isbn: "978-1-78689-270-6",
        language: "English",
        tags: ["fiction", "fantasy", "novels"],
        description:
          "Between life and death there is a library, and within that library, the shelves go on forever.",
        options: [
          {
            id: "opt_format_3",
            name: "Format",
            values: ["Paperback", "Hardcover"],
          },
          { id: "opt_size_3", name: "Size", values: ["A5"] },
        ],
        variants: [
          {
            id: "var_004",
            product_id: "book_003",
            title: "Paperback / A5",
            sku: "BOOK-ML-PB-A5",
            option_values: [
              { option_id: "opt_format_3", name: "Format", value: "Paperback" },
              { option_id: "opt_size_3", name: "Size", value: "A5" },
            ],
            price: 15,
            compare_at_price: 18,
            inventory: { quantity: 150, track_inventory: true },
            pages: 288,
            package: {
              weight: 0.3,
              weight_unit: "kg",
              dimensions: { length: 20, width: 13, height: 1.8 },
              dimension_unit: "cm",
            },
            status: "active",
            createdAt: "2024-02-15T10:00:00Z",
            updatedAt: "2024-02-15T10:00:00Z",
          },
        ],
        images: [
          {
            id: "img_003",
            url: "https://m.media-amazon.com/images/I/81XmS5-6IuL.jpg",
            alt: "The Midnight Library",
          },
        ],
        categories: ["novels", "sad"],
        status: "active",
        createdAt: "2024-02-15T10:00:00Z",
        updatedAt: "2024-02-15T10:00:00Z",
      },
      {
        id: "book_004",
        type: "book",
        title: "Brief Answers to the Big Questions",
        slug: "brief-answers",
        author: "Stephen Hawking",
        publisher: "John Murray",
        isbn: "978-1-47369-598-6",
        language: "English",
        tags: ["science", "physics", "non-fiction"],
        description: "The final book from the world's most brilliant mind.",
        options: [
          { id: "opt_format_4", name: "Format", values: ["Hardcover"] },
          { id: "opt_size_4", name: "Size", values: ["A5"] },
        ],
        variants: [
          {
            id: "var_005",
            product_id: "book_004",
            title: "Hardcover / A5",
            sku: "BOOK-SH-HC-A5",
            option_values: [
              { option_id: "opt_format_4", name: "Format", value: "Hardcover" },
              { option_id: "opt_size_4", name: "Size", value: "A5" },
            ],
            price: 45,
            compare_at_price: 55,
            inventory: { quantity: 80, track_inventory: true },
            pages: 256,
            package: {
              weight: 0.5,
              weight_unit: "kg",
              dimensions: { length: 21, width: 14, height: 2.5 },
              dimension_unit: "cm",
            },
            status: "active",
            createdAt: "2024-03-01T10:00:00Z",
            updatedAt: "2024-03-01T10:00:00Z",
          },
        ],
        images: [
          {
            id: "img_004",
            url: "https://m.media-amazon.com/images/I/91-7688WAnL.jpg",
            alt: "Brief Answers",
          },
        ],
        categories: ["science"],
        status: "active",
        createdAt: "2024-03-01T10:00:00Z",
        updatedAt: "2024-03-01T10:00:00Z",
      },
      {
        id: "book_005",
        type: "book",
        title: "Deep Work",
        slug: "deep-work",
        author: "Cal Newport",
        publisher: "Grand Central Publishing",
        isbn: "978-1-45558-669-1",
        language: "English",
        tags: ["productivity", "focus", "self-help"],
        description: "Rules for focused success in a distracted world.",
        options: [
          { id: "opt_format_5", name: "Format", values: ["Paperback"] },
          { id: "opt_size_5", name: "Size", values: ["A5"] },
        ],
        variants: [
          {
            id: "var_006",
            product_id: "book_005",
            title: "Paperback / A5",
            sku: "BOOK-CN-PB-A5",
            option_values: [
              { option_id: "opt_format_5", name: "Format", value: "Paperback" },
              { option_id: "opt_size_5", name: "Size", value: "A5" },
            ],
            price: 35,
            compare_at_price: 40,
            inventory: { quantity: 120, track_inventory: true },
            pages: 304,
            package: {
              weight: 0.4,
              weight_unit: "kg",
              dimensions: { length: 20, width: 14, height: 2.0 },
              dimension_unit: "cm",
            },
            status: "active",
            createdAt: "2024-04-10T10:00:00Z",
            updatedAt: "2024-04-10T10:00:00Z",
          },
        ],
        images: [
          {
            id: "img_005",
            url: "https://m.media-amazon.com/images/I/81JJ9N5K+bL.jpg",
            alt: "Deep Work",
          },
        ],
        categories: ["self love", "others"],
        status: "active",
        createdAt: "2024-04-10T10:00:00Z",
        updatedAt: "2024-04-10T10:00:00Z",
      },
      {
        id: "book_006",
        type: "book",
        title: "The Silent Patient",
        slug: "the-silent-patient",
        author: "Alex Michaelides",
        publisher: "Celadon Books",
        isbn: "978-1-25030-169-7",
        language: "English",
        tags: ["thriller", "mystery", "fiction"],
        description: "Alicia Berenson’s life is seemingly perfect.",
        options: [
          {
            id: "opt_format_6",
            name: "Format",
            values: ["Paperback", "Hardcover"],
          },
          { id: "opt_size_6", name: "Size", values: ["A5"] },
        ],
        variants: [
          {
            id: "var_007",
            product_id: "book_006",
            title: "Hardcover / A5",
            sku: "BOOK-AM-HC-A5",
            option_values: [
              { option_id: "opt_format_6", name: "Format", value: "Hardcover" },
              { option_id: "opt_size_6", name: "Size", value: "A5" },
            ],
            price: 55,
            compare_at_price: 65,
            inventory: { quantity: 45, track_inventory: true },
            pages: 336,
            package: {
              weight: 0.6,
              weight_unit: "kg",
              dimensions: { length: 22, width: 15, height: 2.8 },
              dimension_unit: "cm",
            },
            status: "active",
            createdAt: "2024-05-20T10:00:00Z",
            updatedAt: "2024-05-20T10:00:00Z",
          },
        ],
        images: [
          {
            id: "img_006",
            url: "https://m.media-amazon.com/images/I/81JJ7fce7dL.jpg",
            alt: "The Silent Patient",
          },
        ],
        categories: ["action", "others"],
        status: "active",
        createdAt: "2024-05-20T10:00:00Z",
        updatedAt: "2024-05-20T10:00:00Z",
      },
    ],
    slug: "pride-and-prejudice",
    total_Products: 12,
    tags: ["Classic Romance", "Regency", "Literary Classic"],
    discount_price: "$11.99",
    discount_type: "percentage",
    discount_percentage: 20,
    status: "active",
    discount_start_date: "2025-12-01T00:00:00Z",
    discount_end_date: "2025-12-31T23:59:59Z",
    createdAt: "2025-09-30T08:45:00Z",
    updatedAt: "2025-12-01T00:00:00Z",
  },
  {
    collection_id: "#46576582",
    image: "https://m.media-amazon.com/images/I/91-7688WAnL.jpg",
    title: "Scientific breakthroughs",
    description:
      "Curated list of books that changed our world through science and physics.",
    category: "Science",
    price: "$45.00",
    slug: "scientific-breakthroughs",
    products: products.filter((p) => p.categories.includes("science")),
    total_Products: products.filter((p) => p.categories.includes("science"))
      .length,
    tags: ["Science", "Physics", "Education"],
    status: "active",
    createdAt: "2025-10-30T09:30:00Z",
    updatedAt: "2025-12-15T00:00:00Z",
  },
  {
    collection_id: "#46576583",
    image: "../assets/images/Banner1.jpg",
    title: "Best Novels of 2024",
    description: "The most impactful and widely read novels of the year.",
    category: "Novels",
    price: "$15.00",
    slug: "best-novels-2024",
    products: products.filter((p) => p.categories.includes("novels")),
    total_Products: products.filter((p) => p.categories.includes("novels"))
      .length,
    tags: ["Fiction", "Popular", "2024"],
    status: "active",
    createdAt: "2025-11-20T09:30:00Z",
    updatedAt: "2025-12-15T00:00:00Z",
  },
];

export const cart = [
  {
    id: "cart_001",
    customer: {
      type: "guest",
      user_id: null,
      session_id: "sess_abc123",
    },
    items: [
      {
        id: "cart_item_001",

        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",

        title: "Mastering JavaScript",
        variant_title: "Paperback / A5",

        quantity: 2,

        price: 20,
        compare_at_price: 25,
        line_total: 40,

        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],

        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },

        addedAt: "2024-02-01T09:20:00Z",
      },
    ],
    totals: {
      subtotal: 40,
      discount: 0,
      shipping_estimate: 7,
      tax_estimate: 3.5,
      grand_total: 50.5,
      currency: "USD",
    },
    discounts: [],
    status: "active",
    createdAt: "2024-02-01T09:15:00Z",
    updatedAt: "2024-02-01T09:25:00Z",
    expiresAt: "2024-02-08T09:15:00Z",
  },
];

export const orders = [
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
  {
    id: "order_001",
    order_number: "ORD-100001",
    customer: {
      type: "guest",
      user_id: null,
      email: "guest@example.com",
      phone: "+1-555-123-4567",
      name: {
        first: "John",
        last: "Smith",
      },
    },
    items: [
      {
        product_id: "book_001",
        variant_id: "var_001",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
      {
        product_id: "book_002",
        variant_id: "var_003",
        sku: "BOOK-JS-PB-A5",
        title: "Mastering JavaScript",
        image:
          "https://cybellium.com/cdn/shop/files/MasteringJavascript.png?v=1706352173",
        variant_title: "Paperback / A5",
        quantity: 2,
        price: 20,
        compare_at_price: 25,
        line_total: 40,
        options: [
          { name: "Format", value: "Paperback" },
          { name: "Size", value: "A5" },
        ],
        package: {
          weight: 0.45,
          weight_unit: "kg",
          dimensions: {
            length: 21,
            width: 14.8,
            height: 2.2,
          },
          dimension_unit: "cm",
        },
      },
    ],
    pricing: {
      subtotal: 40,
      discount: 5,
      shipping: 7,
      tax: 3.5,
      total: 45.5,
      currency: "USD",
    },
    discounts: [
      {
        coupon_id: "coupon_001",
        code: "WELCOME10",
        type: "percentage",
        value: 10,
        amount: 5,
      },
    ],
    shipping: {
      method: "Standard Shipping",
      carrier: "UPS",
      tracking_number: null,
      address: {
        address1: "123 Main Street",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },
    },
    payment: {
      method: "credit_card",
      status: "paid",
      transaction_id: "txn_abc123",
    },
    status: "processing",
    fulfillment_status: "unfulfilled",
    payment_status: "paid",
    createdAt: "2024-02-01T10:30:00Z",
    updatedAt: "2024-02-01T10:30:00Z",
  },
];
