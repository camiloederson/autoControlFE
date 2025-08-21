export interface CustomerPutDTO {
  name: string;
  surname: string;
  dui: string;
  email?: string | null;
  phone: string;
  updatedById: number;
  active: boolean
}
