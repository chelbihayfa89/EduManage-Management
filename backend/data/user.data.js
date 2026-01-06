const users = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Martin",
    email: "alice.martin@email.com",
    phone: "+123456789",
    role: "Admin",
    status: "Active",
    detail: "Peut tout gérer"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Durand",
    email: "bob.durand@email.com",
    phone: "+987654321",
    role: "Teacher",
    status: "Inactive",
    detail: "Mathématiques"
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Dupont",
    email: "charlie.dupont@email.com",
    phone: "+1122334455",
    role: "Student",
    status: "Active",
    detail: "Classe 5A"
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Petit",
    email: "david.petit@email.com",
    phone: "+5566778899",
    role: "Parent",
    status: "Active",
    detail: "Enfant: Charlie Dupont"
  }
];

// Pour Node.js
module.exports = users;
