export default class ImgDto {
    id: number = 0
    src: string = ""
    idCategory: number = 0
    idHall: number = 0 
    idSuppliers: number = 0

    /**
     *
     */
    /**
     *
     */
    
    constructor( id: number,src: string, idCategory: number ,idHall: any, idSuppliers:any) {
   
        this.id=id;
        this.src=src;
        this.idCategory=idCategory;
        this.idHall=idHall;
        this.idSuppliers=idSuppliers;
    }
}



