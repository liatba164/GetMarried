import { HttpClient } from '@angular/common/http';
import { flatten } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import CategoryDto from 'src/app/models/CategoryDto';
import ImgDto from 'src/app/models/imgDto';
import ServiceDto from 'src/app/models/serviesDto';
import ServToSuppDto from 'src/app/models/ServToSuppDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServImgService } from 'src/app/Servies/serv-img.service';
import { ServServToSuppService } from 'src/app/Servies/serv-serv-to-supp.service';
import { ServServiceService } from 'src/app/Servies/serv-service.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {


  id = 0;
  idKashrut = 0;
  idInvited = 0;
  idtype = 0;
  url: any = ""
  logo_url: any = "";
  home_url: any = "";
  ImgList: ImgDto[] = []

  supplier = new SuppliersDto();
  Address = new AddressDto();
  categoryList: CategoryDto[] = [];
  AreaList: AreaDto[] = [];
  serviceList: ServiceDto[] = [];
  servToSuppeList: ServToSuppDto[] = [];
  showServ: string[] = [];
  idServ: number[] = [];

  updateSupplier = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp("(0)[0-9]")), Validators.maxLength(12)]),
      area: new FormControl('', [Validators.required]),
      minPrice: new FormControl('', [Validators.required]),
      maxPrice: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      street: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      number: new FormControl('',),
      service: new FormControl('', [Validators.required]),
      description: new FormControl('',),
      activity_time: new FormControl('', [Validators.pattern(new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]-([0-1]?[0-9]|2[0-4]):[0-5][0-9]$/))]),
    },
  )

  //#region 

  getErrorActivityTime() {
    return this.updateSupplier.get('activity_time')?.hasError('pattern') ? 'לא תקין' :'';
  }

  getErrorPhone() {
    return this.updateSupplier.get('phone')?.hasError('required') ? 'שדה חובה' :
      this.updateSupplier.get('phone')?.hasError('pattern') ? 'לא חוקי' :
        this.updateSupplier.get('phone')?.hasError('maxlength') ? 'לא חוקי' : '';
  }

  getErrorName() {
    return this.updateSupplier.get('name')?.hasError('required') ? 'שדה חובה' : '';
  }


  getErrorArea() {
    return this.updateSupplier.get('area')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMinPrice() {
    return this.updateSupplier.get('minPrice')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMaxPrice() {
    return this.updateSupplier.get('maxPrice')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorCity() {
    return this.updateSupplier.get('city')?.hasError('required') ? 'שדה חובה' :
      this.updateSupplier.get('city')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getErrorStreet() {
    return this.updateSupplier.get('street')?.hasError('required') ? 'שדה חובה' :
      this.updateSupplier.get('street')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getErrorService() {
    return this.updateSupplier.get('service')?.hasError('required') ? 'שדה חובה' : '';
  }


  //#endregion



  keyPressNumber(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 && charCode != 58 && charCode != 45 || charCode > 57 && charCode != 58 && charCode != 45)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  onSelectFile(event: any) {
    this.ImgList = []
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files && event.target.files[i]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          if (event.target != null) {
            this.url = event.target.result;
            this.ImgList[i] = new ImgDto(0, this.url, this.supplier.idCategory, null, this.id);
          }
        }
      }
    }
  }

  onSelectImg(event: any, id: number) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event.target != null)
          if (id == 1) {
            this.home_url = event.target.result;
            this.supplier.src = this.home_url;
          }
          else {
            this.logo_url = event.target.result;
            this.supplier.srcLogo = this.logo_url;
          }
      }
    }
  }

  update() {

    if (this.updateSupplier.valid) {
      let flag = true;
      this.supplier.name = this.updateSupplier.get('name')?.value;
      this.supplier.phone = this.updateSupplier.get('phone')?.value;
      this.supplier.minPrice = this.updateSupplier.get('minPrice')?.value;
      this.supplier.maxPrice = this.updateSupplier.get('maxPrice')?.value;
      this.supplier.description = this.updateSupplier.get('description')?.value;
      this.supplier.activity_time = this.updateSupplier.get('activity_time')?.value;

      this.AreaList.map(x => {
        if (x.area1 == this.updateSupplier.get('area')?.value)
          this.supplier.idArea = x.id
      });


      //הכנסה למערך את השירותים שנבחרו
      let i = 0
      this.serviceList.map(x => {
        if (x.serv == this.updateSupplier.get('service')?.value[i]) { this.idServ.push(x.id); i++ }
      })

      //if the address has changed
      if (this.updateSupplier.get('city')?.touched == true || this.updateSupplier.get('number')?.touched == true || this.updateSupplier.get('street')?.touched == true) {
        this.Address.city = this.updateSupplier.get('city')?.value
        this.Address.number = this.updateSupplier.get('number')?.value
        this.Address.street = this.updateSupplier.get('street')?.value
        this.srv_address.uppdateAddress(this.Address).subscribe(x => {
          if (!x)
            flag = x;
        });
      }


      this.serv_supplier.UpdateSupplier(this.supplier).subscribe(y => {
        if (!y)
          flag = y;
      })

      //if the services have changed
      if (this.updateSupplier.get('service')?.touched) {
        //add services
        this.servToSuppeList = [];
        this.idServ.forEach(element => {
          let serv = new ServToSuppDto();
          serv.idServ = element;
          serv.idSuppliers = this.supplier.id
          this.servToSuppeList.push(serv);
        });

        if (this.servToSuppeList.length == 0) {
          let serv = new ServToSuppDto();
          serv.idSuppliers = this.supplier.id;
          serv.id = -1;
          this.servToSuppeList.push(serv);
        }

        this.serv_servToSupp.PostServices(this.servToSuppeList).subscribe(z => {
          if (!z)
            flag = z
        });
      }


      if (this.ImgList.length == 0) {
        let img = new ImgDto(-1, "", 0, 0, 0);
        this.ImgList.push(img);
      }
      this.srv_img.PostImages(this.ImgList).subscribe(x => {
        if (!x)
          flag = x;
        this.dialogRef.close({ data: flag })
      });
    }
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private srv_img: ServImgService, private serv_servToSupp: ServServToSuppService,
    private serv_supplier: ServSuppliersService, private serv_service: ServServiceService, private srv_area: ServAreaService,
    private srv_address: ServAddressService, private dialogRef: MatDialogRef<UpdateSupplierComponent>) {

    this.id = this.data.id;
    this.serv_supplier.GetSuppliersById(this.id).subscribe(x => {
      this.supplier = x;
      this.updateSupplier.get('name')?.setValue(this.supplier.name)
      this.updateSupplier.get('phone')?.setValue(this.supplier.phone)
      this.updateSupplier.get('description')?.setValue(this.supplier.description)
      this.updateSupplier.get('maxPrice')?.setValue(this.supplier.maxPrice)
      this.updateSupplier.get('minPrice')?.setValue(this.supplier.minPrice)
      this.updateSupplier.get('activity_time')?.setValue(this.supplier.activity_time)

      this.srv_address.GetAddressById(this.supplier.idAddress).subscribe(y => {
        this.Address = y;
        this.updateSupplier.get('city')?.setValue(y.city)
        this.updateSupplier.get('number')?.setValue(y.number)
        this.updateSupplier.get('street')?.setValue(y.street)
      })
      this.srv_img.GetImgSuppliersById(this.supplier.idCategory, this.id).subscribe(x => {
        this.ImgList = x;
      });
    });
  }



  ngOnInit(): void {

    this.srv_area.GetArea().subscribe(x => {
      this.AreaList = x;
      this.AreaList.map(x => {
        if (x.id == this.supplier.idArea)
          this.updateSupplier.get('area')?.setValue(x.area1)
      })

      this.serv_service.GetListService(this.supplier.idCategory).subscribe(x => {
        this.serviceList = x;
        this.serv_servToSupp.GetAllServToSupp(this.id).subscribe(x => {
          this.servToSuppeList = x;
          this.serviceList.forEach(element => {
            this.servToSuppeList.map(x => {
              if (x.idServ == element.id)
                this.showServ.push(element.serv)
            })
          });
          this.updateSupplier.get('service')?.setValue(this.showServ);
        });

      })
    });



  }

}
