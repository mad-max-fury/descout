 export interface DriverDataProps {
  bio: {
    address: string;
    age: string;
    carUrl: string;
    dob: string;
    email: string;
    gender: string;
    imageUrl: string;
    name: string;
    nin: string;
    number: string;
    rating: string;
   
  };
  ridesInfo: {
    disciplinaryIssue: any;
    dvi?: any;
    name: string;
    licensePlate: string;
    modelNo: string;
    ratings: number;
    trips: number;
    vehicleName: string;
    dateJoined: string;
    reviews: {
      review:string;
      star:number;
      timestamp:string;
      _id:string;
    }[];
  }[];
  _id: string;
  message: string;
  success: boolean;
}

export interface userDetails {
  token: string;
  companyName: string;
  isloggedin: boolean;
}

  
  