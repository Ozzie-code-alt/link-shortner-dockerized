type StoredLink = {
  url: {
    link: string;
  };
  // Add more fields later if needed
};


export const inMemoryStore: Record<string, StoredLink> = {};
