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
        url: "https://example.com/book-cover.jpg",
        alt: "Mastering JavaScript Book Cover",
      },
    ],

    categories: ["programming", "javascript", "books"],

    status: "active",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
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
        url: "https://example.com/book-cover.jpg",
        alt: "Mastering JavaScript Book Cover",
      },
    ],

    categories: ["programming", "javascript", "books"],

    status: "active",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
];
