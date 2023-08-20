const newMembers = [
  {
    id: 1,
    userName: "Matin",
    job: "front end developer",
    img: "assets/images/person.jpg",
  },
  {
    id: 2,
    userName: "Ali",
    job: "back end developer",
    img: "assets/images/person.jpg",
  },
  {
    id: 3,
    userName: "Reza",
    job: "android developer",
    img: "assets/images/person.jpg",
  },
  {
    id: 4,
    userName: "Mahour",
    job: "android developer",
    img: "assets/images/person.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Matin Hosseini",
    date: "29 july 2003",
    amount: 158,
    status: "declined",
    img: "assets/images/person.jpg",
  },
  {
    id: 2,
    customer: "negin Hosseini",
    date: "12 may 2003",
    amount: 156,
    status: "approved",
    img: "assets/images/person.jpg",
  },
  {
    id: 3,
    customer: "ali reazaee",
    date: "12 march 2017",
    amount: 47,
    status: "pending",
    img: "assets/images/person.jpg",
  },
  {
    id: 4,
    customer: "mohsen Hosseini",
    date: "30 june 2023",
    amount: 257,
    status: "declined",
    img: "assets/images/person.jpg",
  },
];

let users = [
  {
    id: 1,
    userName: "Matin Hosseini",
    avatar: "assets/images/person.jpg",
    status: "active",
    transaction: "$578.54",
  },
  {
    id: 2,
    userName: "Mohsen Rezaee",
    avatar: "assets/images/person.jpg",
    status: "active",
    transaction: "$786.14",
  },
  {
    id: 3,
    userName: "ali derakhshani",
    avatar: "assets/images/person.jpg",
    status: "non-active",
    transaction: "$147.54",
  },
  {
    id: 4,
    userName: "zahra aghayi",
    avatar: "assets/images/person.jpg",
    status: "active",
    transaction: "$321.54",
  },
  {
    id: 5,
    userName: "hamze Hosseini",
    avatar: "assets/images/person.jpg",
    status: "active",
    transaction: "$92.78",
  },
];

export { newMembers, transactions, users };
