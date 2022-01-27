import Area from "./AreaDto";
import HallType from "./hallTypeDto";
import Invited from "./InvitedDto";
import Kashrut from "./KashrutDto";

export default class Filter {
areas:Area[] = []
invitds: Invited[] = []
kashrut:Kashrut[]=[]
hallTypes:HallType[]=[]
price:number=0; 
}