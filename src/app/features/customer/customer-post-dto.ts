export interface CustomerPostDTO {
  name: string;
  surname: string;
  dui: string;
  email?: string | null;
  phone: string;
  createdById: number;
  active: boolean
}
