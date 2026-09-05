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
  }
};
