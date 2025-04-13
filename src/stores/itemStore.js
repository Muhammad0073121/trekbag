import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist((set) => ({
    items: initialItems,
    handleAddItems: (itemName) => {
      set((state) => ({
        items: [
          ...state.items,
          { id: new Date().getTime(), name: itemName, packed: false },
        ],
      }));
    },

    handleDeleteItem: (id) => {
      set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
    },

    handleToggleItem: (id) => {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id == id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        }),
      }));
    },

    handleRemoveAllItems: () => {
      set(() => ({ items: [] }));
    },
    handleItemsToInitial: () => {
      set(() => ({ items: initialItems }));
    },
    handleAllItemsAsComplete: () => {
      set((state) => {
        return {
          items: state.items.map((item) => {
            return { ...item, packed: true };
          }),
        };
      });
    },

    handleAllItemsAsIncomplete: () => {
      set((state) => {
        return {
          items: state.items.map((item) => {
            return { ...item, packed: false };
          }),
        };
      });
    },
  })),
  {
    name: "items",
  }
);
