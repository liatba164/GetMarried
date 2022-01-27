import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import CategoryDto from 'src/app/models/CategoryDto';
import HallsDto from 'src/app/models/hallsDto';
import HallTypeDto from 'src/app/models/hallTypeDto';
import ImgDto from 'src/app/models/imgDto';
import KashrutDto from 'src/app/models/KashrutDto';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import { ServHallTypeService } from 'src/app/Servies/serv-hallType.service';
import { ServImgService } from 'src/app/Servies/serv-img.service';
import { ServKashrutService } from 'src/app/Servies/serv-kashrut.service';

@Component({
  selector: 'app-update-Hall',
  templateUrl: './update-Hall.component.html',
  styleUrls: ['./update-Hall.component.css']
})
export class UpdateHallComponent implements OnInit {

  id = 0;
  idKashrut = 0;
  idInvited = 0;
  idtype = 0;
  url: any = ""
  hall = new HallsDto();
  Address = new AddressDto();
  AreaList: AreaDto[] = [];
  kashrutList: KashrutDto[] = [];
  hallTypeList: HallTypeDto[] = [];
  logo_url: any = "";
  home_url: any = "";
  ImgList: ImgDto[] = []
  flag: any

  updateHall = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp("(0)[0-9]")), Validators.maxLength(12)]), area: new FormControl('', [Validators.required]),
      minPrice: new FormControl('', [Validators.required]),
      maxPrice: new FormControl('', [Validators.required]),
      maxInvited: new FormControl('', [Validators.required]),
      minInvited: new FormControl('', [Validators.required]),
      description: new FormControl('',),
      city: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      street: new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      number: new FormControl('',),
      kashrut: new FormControl('', [Validators.required]),
      hallType: new FormControl('', [Validators.required]),
    },
  )


  //#region 

  getErrorPhone() {
    return this.updateHall.get('phone')?.hasError('required') ? 'שדה חובה' :
      this.updateHall.get('phone')?.hasError('pattern') ? 'לא חוקי' :
        this.updateHall.get('phone')?.hasError('maxlength') ? 'לא חוקי' : '';
  }

  getErrorName() {
    return this.updateHall.get('name')?.hasError('requiredTrue') ? 'שדה חובה' : '';
  }

  getErrorArea() {
    return this.updateHall.get('area')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMinPrice() {
    return this.updateHall.get('minPrice')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMaxPrice() {
    return this.updateHall.get('maxPrice')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMinInvited() {
    return this.updateHall.get('minInvited')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorMaxInvited() {
    return this.updateHall.get('maxInvited')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorCity() {
   return this.updateHall.get('city')?.hasError('required') ? 'שדה חובה' :
     this.updateHall.get('city')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getErrorStreet() {
    return this.updateHall.get('street')?.hasError('required') ? 'שדה חובה' :
     this.updateHall.get('street')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getErrorKashrut() {
    return this.updateHall.get('kashrut')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorHallType() {
    return this.updateHall.get('hallType')?.hasError('required') ? 'שדה חובה' : '';
  }
  //#endregion


  update() {
    if (this.updateHall.valid) {
      let flag = true;
      this.hall.name = this.updateHall.get('name')?.value;
      this.hall.phone = this.updateHall.get('phone')?.value;
      this.hall.minPrice = this.updateHall.get('minPrice')?.value;
      this.hall.maxPrice = this.updateHall.get('maxPrice')?.value;
      this.hall.maxInvited = this.updateHall.get('maxInvited')?.value;
      this.hall.minInvited = this.updateHall.get('minInvited')?.value;
      this.hall.description = this.updateHall.get('description')?.value;

      this.AreaList.map(x => {
        if (x.area1 == this.updateHall.get('area')?.value)
          this.hall.idArea = x.id
      });

      this.hallTypeList.map(x => {
        if (x.type == this.updateHall.get('hallType')?.value)
          this.hall.idtype = x.id
      });

      this.kashrutList.map(x => {
        if (x.kashrut1 == this.updateHall.get('kashrut')?.value)
          this.hall.idKashrut = x.id
      });

      //update address
      if (this.updateHall.get('city')?.touched == true || this.updateHall.get('number')?.touched == true || this.updateHall.get('street')?.touched == true) {
        this.Address.city = this.updateHall.get('city')?.value;
        this.Address.number = this.updateHall.get('number')?.value;
        this.Address.street = this.updateHall.get('street')?.value;

        this.srv_address.uppdateAddress(this.Address).subscribe(x => {
          if (!x)
            flag = x
        });
      }

      //update hall
      this.serv_Hall.UpdateHall(this.hall).subscribe(res => {
        if (!res)
          flag = res;
      });

      //update img
      if (this.ImgList.length == 0) {
        let img = new ImgDto(-1, "", 0, 0, 0);
        this.ImgList.push(img);
      }
      this.serv_img.PostImages(this.ImgList).subscribe(a => {
        if (!a)
          flag = a;
        this.dialogRef.close({ data: flag })
      })
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
            this.ImgList[i] = new ImgDto(0, this.url, 1, this.id, null);
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
            this.hall.src = this.home_url;
          }
          else {
            this.logo_url = event.target.result;
            this.hall.srcLogo = this.logo_url;
          }
      }
    }
  }

  constructor(private serv_img: ServImgService, @Inject(MAT_DIALOG_DATA) public data: any, private serv_HallType: ServHallTypeService,
    private serv_kashrut: ServKashrutService, private srv_area: ServAreaService, private srv_address: ServAddressService,
    private serv_Hall: ServHallsService, private dialogRef: MatDialogRef<UpdateHallComponent>) {

    this.id = this.data.id;
    this.serv_Hall.GetHallById(this.id).subscribe(x => {
      this.hall = x;
     
      this.updateHall.get('name')?.setValue(this.hall.name)
      this.updateHall.get('phone')?.setValue(this.hall.phone)
      this.updateHall.get('description')?.setValue(this.hall.description)
      this.updateHall.get('maxInvited')?.setValue(this.hall.maxInvited)
      this.updateHall.get('minInvited')?.setValue(this.hall.minInvited)
      this.updateHall.get('maxPrice')?.setValue(this.hall.maxPrice)
      this.updateHall.get('minPrice')?.setValue(this.hall.minPrice)

      this.srv_address.GetAddressById(this.hall.idAddress).subscribe(y => {
        this.Address = y;
        this.updateHall.get('city')?.setValue(y.city)
        this.updateHall.get('number')?.setValue(y.number)
        this.updateHall.get('street')?.setValue(y.street)
      })
    });
  }



  ngOnInit(): void {
    this.srv_area.GetArea().subscribe(x => {
      this.AreaList = x;
      this.AreaList.map(x => {
        if (x.id == this.hall.idArea)
          this.updateHall.get('area')?.setValue(x.area1)
      })
      this.serv_HallType.GetHallType().subscribe(x => {
        this.hallTypeList = x;
        this.hallTypeList.map(x => {
          if (x.id == this.hall.idtype)
            this.updateHall.get('hallType')?.setValue(x.type)
        })
        
        this.serv_kashrut.GetKashrut().subscribe(x => {
          this.kashrutList = x;
          this.kashrutList.map(x => {
            if (x.id == this.hall.idKashrut)
              this.updateHall.get('kashrut')?.setValue(x.kashrut1)
          })

          this.serv_img.GetImgById(1, this.hall.id).subscribe(x => {
            this.ImgList = x;
          });
        });
      });
    });
  }
}
