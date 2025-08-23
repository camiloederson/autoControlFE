export interface MechanicGetDTO {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  dateIn: string;   
  dateOut?: string; 
  active: boolean;
  birthdate: string; 
}