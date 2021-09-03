export default interface IResp {
  firstName: string;
  name: string;
  birthday: Date | null;
  address: {
    label: string;
    lat: number;
    lng: number;
  };
}
