export const mockUsers = {
  userA: {
    name: "User A",
    modules: [
      { name: "Orders", permission: ["VIEW", "CREATE"] },
      { name: "Billing", permission: ["VIEW"] },
      { name: "Reports", permission: ["VIEW", "CREATE", "DELETE"] }
    ]
  },
  userB: {
    name: "User B",
    modules: [
      { name: "Orders", permission: ["VIEW"] }
    ]
  },
  userC: {
    name: "User C",
    modules: [] // Demonstrates the empty state edge case
  }
};
