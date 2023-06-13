type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserApiResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};

export type UserApiFilter = {
  page: string;
  keyword?: string;
};
