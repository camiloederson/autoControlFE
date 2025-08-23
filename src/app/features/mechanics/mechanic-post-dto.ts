export interface MechanicPostDTO {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dateIn: string;      
  dateOut?: string;     
  active: boolean;
  birthDate: string;    
  createdById: number;
}
