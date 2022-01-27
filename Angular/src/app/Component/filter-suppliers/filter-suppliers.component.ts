import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import AreaDto from 'src/app/models/AreaDto';
import ServiceDto from 'src/app/models/serviesDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServServiceService } from 'src/app/Servies/serv-service.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';



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
  selector: 'app-filter-suppliers',
  templateUrl: './filter-suppliers.component.html',
  styleUrls: ['./filter-suppliers.component.css']
})
export class FilterSuppliersComponent implements OnInit {
  @Input() idCategory: any;
  ArraySuppliers: SuppliersDto[] = [];
  category = 0;
  checklistSelection = new SelectionModel<ExampleFlatNode>(true);
  @Output() passArray = new EventEmitter<SuppliersDto[]>();

  TREE_DATA: FilterNode[] = [
    {
      name: 'אזור',
      children: [
      ]
    },
    {
      name: 'שירות',
      children: [
      ]
    },

  ];

  /*take data from DB */
  areas: AreaDto[] = [];
  service: ServiceDto[] = [];

  /*save the data from checksBox */
  areasArr: Array<AreaDto> = [];
  servArr: Array<ServiceDto> = [];


  /* Slider Variables*/
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 0;
  min = 0;
  showTicks = false;
  step = 50;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }
  formatLabel(value1: number) {
    this.value = value1
    return this.value + '₪';
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

    for (let x of this.service)
      for (let y of list)
        if (x.serv == y.name) {
          let srv: ServiceDto = new ServiceDto();
          srv.id = x.id;
          this.servArr.push(srv);
        }

  }


  minValue() {
    switch (this.idCategory) {
      case "2":
        this.min = 5000;
        this.max = 15000;
        break;
      case "3":
        this.min = 1500;
        this.max = 3500;
        break;
      case "4":
        this.min = 1500;
        this.max = 3500;
        break;
      case "5":
        this.min = 1500;
        this.max = 5500;
        break;
      case "6":
        this.min = 5500;
        this.max = 9500;
        break;
      case "7":
        this.min = 3500;
        this.max = 8500;
        break;
    }
    return this.min;
  }




  FillTreeFilterData() {

    this.areas?.map((y: { area1: any; }) => {
      var current = {
        name: y.area1
      }
      this.TREE_DATA[0].children?.push(current);
    });

    this.service?.map((y: { serv: any; }) => {
      var current = {
        name: y.serv
      }
      this.TREE_DATA[1].children?.push(current);
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
    console.log('selected list', this.checklistSelection.selected);

  }

  delete() {
    this.value = 0;
    this.checklistSelection.clear();
    this.servSuppliers.GetSuppliers(this.idCategory).subscribe(x => { this.ArraySuppliers = x })
    this.passArray.emit(this.ArraySuppliers);
  }

  search() {
    this.areasArr = [];
    this.servArr = [];
    this.storeValuesInObject(this.checklistSelection.selected);
    this.servSuppliers.GetSuppliersByFilter(this.areasArr, this.servArr, this.value, this.idCategory).subscribe(x => {
      this.ArraySuppliers = x;

    });


    this.passArray.emit(this.ArraySuppliers);
  }

  getMin() {
    this.servSuppliers.GetMinPrice(this.idCategory).subscribe(x => {
      if (x == null || x == 0) {
        this.getMin();
      }
      console.log('min:', x);

      this.min = x;
    });
  }

  getMax() {

    this.servSuppliers.GetMaxPrice(this.idCategory).subscribe(x => {
      if (x == null || x == 0) {
        this.getMax();
      }

      this.max = x;
    });

  }
  constructor(private servArea: ServAreaService, private servService: ServServiceService, private servSuppliers: ServSuppliersService) {

  }
  onInit() {
    this.getMax();
    this.getMin();
    this.servArea.GetArea().subscribe(x => { this.areas = x; });
    this.servService.GetListService(this.idCategory).subscribe(x => {
      this.service = x;
    });
    setTimeout(() => {
      this.FillTreeFilterData();
    }, 1000);
  }

  ngOnInit(): void {

    this.onInit();
  }

}
