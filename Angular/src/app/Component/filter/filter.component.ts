import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import HallsDto from 'src/app/models/hallsDto';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServKashrutService } from 'src/app/Servies/serv-kashrut.service';
import { ServInvitedService } from 'src/app/Servies/serv-invited.service';
import { ServHallTypeService } from 'src/app/Servies/serv-hallType.service';
import HallTypeDto from 'src/app/models/hallTypeDto';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import KashrutDto from 'src/app/models/KashrutDto';
import AreaDto from 'src/app/models/AreaDto';
import InvitedDto from 'src/app/models/InvitedDto';
import { max } from 'rxjs/operators';


interface FilterNode {
  name: string;
  children?: FilterNode[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // current: any = "";
  ArrayHall: HallsDto[] = [];
  checklistSelection = new SelectionModel<ExampleFlatNode>(true);
  @Output() passArray = new EventEmitter<HallsDto[]>();

  TREE_DATA: FilterNode[] = [
    {
      name: 'סוג אולם',
      children: [
      ]
    },
    {
      name: 'אזור',
      children: [
      ]
    },
    {
      name: 'כמות מוזמנים',
      children: [
      ]
    },
    {
      name: 'כשרות',
      children: [
      ]
    },
  ];

  /*take data from DB */
  areas: AreaDto[] = [];
  kashrut: KashrutDto[] = [];
  invited: InvitedDto[] = [];
  hallType: HallTypeDto[] = [];

  /*save the data from checksBox */
  halltypArr: Array<HallTypeDto> = [];
  invtArr: Array<InvitedDto> = [];
  kashrutArr: Array<KashrutDto> = [];
  areasArr: Array<AreaDto> = [];


  max = 0;
  min = 0;
  step = 50;
  value = 0;
  vertical = false;


  formatLabel(value: number) {
    this.value = value
    return value + '₪';
  }

  private _transformer = (node: FilterNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  descendantsAllSelected(node: ExampleFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      const ret = this.checklistSelection.isSelected(child);

      return ret;
    });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: ExampleFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  storeValuesInObject(list: any) {


    for (let x of this.areas)
      for (let y of list)
        if (x.area1 == y.name) {
          let area: AreaDto = new AreaDto();
          area.id = x.id;
          this.areasArr.push(area);
        }

    let index = 0;
    for (let x of this.kashrut) {
      index++;
      for (let y of list) {
        if (x.kashrut1 == y.name) {
          let kash: KashrutDto = new KashrutDto();
          kash.id = index;
          this.kashrutArr.push(kash);
        }
      }
    }


    for (let x of this.invited) {
      for (let y of list) {
        if (x.invited1 == y.name) {
          let invit: InvitedDto = new InvitedDto();
          invit.id = x.id;
          this.invtArr.push(invit);
        }

      }
    }

    for (let x of this.hallType)
      for (let y of list)
        if (x.type == y.name) {
          let haltyp: HallTypeDto = new HallTypeDto();
          haltyp.id = x.id;
          this.halltypArr.push(haltyp);
        }
  }


  FillTreeFilterData() {

    this.hallType?.map((y: { type: any; }) => {
      var current = {
        name: y.type
      }
      this.TREE_DATA[0].children?.push(current);

    });

    this.areas?.map((y: { area1: any; }) => {
      var current = {
        name: y.area1
      }
      this.TREE_DATA[1].children?.push(current);

    });


    this.invited?.map((y: { invited1: any; }) => {
      var current = {
        name: y.invited1
      }
      this.TREE_DATA[2].children?.push(current);

    });

    this.kashrut?.map((y: { kashrut1: any; }) => {
      var current = {
        name: y.kashrut1
      }
      this.TREE_DATA[3].children?.push(current);

    });
    this.dataSource.data = this.TREE_DATA;
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: ExampleFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  delete() {
    this.value = 100;
    this.checklistSelection.clear();
    this.srv_hall.GetHalls().subscribe(x => { this.ArrayHall = x })
    this.passArray.emit(this.ArrayHall);
  }

  search() {
    
    this.halltypArr = [];
    this.areasArr = [];
    this.kashrutArr = [];
    this.invtArr = [];
    this.storeValuesInObject(this.checklistSelection.selected);

    this.srv_hall.GetHallsByFilter(this.invtArr, this.areasArr, this.halltypArr, this.kashrutArr, this.value).subscribe(x => { this.ArrayHall = x })
    this.passArray.emit(this.ArrayHall);
  }

  getMin() {
    this.srv_hall.GetMinPrice().subscribe(x => {
      if (x == null || x == 0) {
        this.getMin();
      }

      this.min = x;
    });
  }

  getMax() {

    this.srv_hall.GetMaxPrice().subscribe(x => {
      if (x == null || x == 0) {
        this.getMax();
      }

      this.max = x;
    });

  }
  constructor(private srv_hall: ServHallsService, private servArea: ServAreaService, private servKashtut: ServKashrutService,
     private servInvited: ServInvitedService, private servHallType: ServHallTypeService) {}

onInit(){
    this.getMax();
    this.getMin();
    this.servArea.GetArea().subscribe(x => { this.areas = x; });
    this.servInvited.GetAllInvited().subscribe(x => { this.invited = x });
    this.servKashtut.GetKashrut().subscribe(x => { this.kashrut = x });
    this.servHallType.GetHallType().subscribe(x => {
      this.hallType = x;
     }
    );
    setTimeout(() => {
      this.FillTreeFilterData();
    }, 1200);
}


  ngOnInit(): void {
    this.onInit();
  }


}


