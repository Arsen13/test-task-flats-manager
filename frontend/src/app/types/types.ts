export type FormFields = {
    header: string;
    description: string;
    price: number;
    numberOfRooms: number;
    picture: File;
}

export type TFlat = {
    _id: string;
    header: string;
    description: string;
    price: number;
    numberOfRooms: number;
    picture: string; 
}