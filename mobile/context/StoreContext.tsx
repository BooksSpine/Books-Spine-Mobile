import React, { createContext, useContext, useState, useEffect } from "react";
import { cart as initialCartData } from "@/constant";
// Define Types
export interface CartItem {
  id: string;
  product_id: string;
  variant_id?: string;
  title: string;
  variant_title?: string;
  price: number;
  quantity: number;
  image?: any; // Accepting strictly typed image or string URL
  maxQuantity?: number;
}

export interface WishlistItem {
  id: string; // Product ID
  title: string;
  author: string;
  image: any;
  price: number | string;
  rating?: number;
}

interface StoreContextType {
  cartItems: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  cartTotal: number;
  cartCount: number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize cart with mock data from constants if available
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (initialCartData && initialCartData.length > 0) {
      return initialCartData[0].items.map((item: any) => ({
        id: item.id,
        product_id: item.product_id,
        variant_id: item.variant_id,
        title: item.title,
        variant_title: item.variant_title,
        price: item.price,
        quantity: item.quantity,
        image: null, // Mock data might not have image directly on item, will need to handle display
        maxQuantity: item.inventory?.quantity || 10,
      }));
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Calculate generic totals
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.product_id === newItem.product_id &&
          item.variant_id === newItem.variant_id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
