import { VehicleBrandGetDTO } from "../vehicleBrands/vehicle-brand-get-dto";

export interface VehicleGetDTO {
    id: number,
    model: string,
    color: string,
    year: number,
    licensePlate : string,
    vehicleBrand: VehicleBrandGetDTO
    }

