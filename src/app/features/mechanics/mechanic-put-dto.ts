export interface MechanicPutDTO {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dateIn: string;
  dateOut?: string;
  active: boolean;
  birthDate: string;
  updatedById: number;
}
