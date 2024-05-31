export type tableProps = {
  deleteCar: string;
  editColor: string;
  image: string;
  email: string;
  gender: string;
  role: string;
  dateAdded: string;
  name: string;
};
export type mainTableProps = tableProps[];

export const TableData: mainTableProps = [
  {
    deleteCar: "Chevrolet",
    editColor: "Blue",
    image: "http://dummyimage.com/226x100.png/dddddd/000000",
    email: "kharrinson0@jiathis.com",
    gender: "Female",
    role: "Admin",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Kate",
  },
  {
    deleteCar: "GMC",
    editColor: "Purple",
    image: "http://dummyimage.com/218x100.png/cc0000/ffffff",
    email: "sandriveaux1@ustream.tv",
    gender: "Female",
    role: "Auditor",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Silvia",
  },
  {
    deleteCar: "Cadillac",
    editColor: "Pink",
    image: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
    email: "dmcclymond2@ask.com",
    gender: "Male",
    role: "Editor",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Davide",
  },
  {
    deleteCar: "Plymouth",
    editColor: "Maroon",
    image: "http://dummyimage.com/144x100.png/cc0000/ffffff",
    email: "kzupone3@blogs.com",
    gender: "Female",
    role: "Admin",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Kimberlyn",
  },
  {
    deleteCar: "Pontiac",
    editColor: "Aquamarine",
    image: "http://dummyimage.com/220x100.png/dddddd/000000",
    email: "bnajera4@wordpress.org",
    gender: "Male",
    role: "Auditor",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Baird",
  },
  {
    deleteCar: "Pontiac",
    editColor: "Fuscia",
    image: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
    email: "ewarmington5@cnbc.com",
    gender: "Female",
    role: "Editor",
    dateAdded: "Apr 12, 2023 | 09:32AM",
    name: "Engracia",
  },
];
