// This is a mock database for demonstration purposes.
// In a real application, you would use a persistent database like Firebase Firestore, PostgreSQL, etc.
interface UserSubscription {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Store data in-memory. This will be reset on server restart.
const subscriptions: UserSubscription[] = [];

export const db = {
  addSubscription: async (data: { name: string; email: string }) => {
    const newSubscription = {
      id: (subscriptions.length + 1).toString(),
      ...data,
      createdAt: new Date(),
    };
    subscriptions.push(newSubscription);
    return newSubscription;
  },
  getSubscriptions: async () => {
    // Return a copy to avoid mutations and serialize dates
    const data = subscriptions.map(s => ({ ...s, createdAt: s.createdAt.toISOString() }));
    return data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },
};
