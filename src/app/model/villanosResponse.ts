// Modelo de datos
export class VillanosResponse {

    compania: string;
    sitio: string;
    ListasVillanos: VillanosList[];
}

export class VillanosList {

    id: string;
    nombre: string;
    descripcion: string;
    poder: string;
    imagen: string;
}