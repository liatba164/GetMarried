import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { timer } from 'rxjs';
import AddressDto from 'src/app/models/AddressDto';
import AreaDto from 'src/app/models/AreaDto';
import CategoryDto from 'src/app/models/CategoryDto';
import HallsDto from 'src/app/models/hallsDto';
import HallTypeDto from 'src/app/models/hallTypeDto';
import ImgDto from 'src/app/models/imgDto';
import KashrutDto from 'src/app/models/KashrutDto';
import ServiceDto from 'src/app/models/serviesDto';
import ServToSuppDto from 'src/app/models/ServToSuppDto';
import SuppliersDto from 'src/app/models/suppliersDto';
import { LoadingService } from 'src/app/Servies/loading.service';
import { ServAddressService } from 'src/app/Servies/serv-address.service';
import { ServAreaService } from 'src/app/Servies/serv-area.service';
import { ServCategoryService } from 'src/app/Servies/serv-category.service';
import { ServHallsService } from 'src/app/Servies/serv-halls.service';
import { ServHallTypeService } from 'src/app/Servies/serv-hallType.service';
import { ServImgService } from 'src/app/Servies/serv-img.service';
import { ServKashrutService } from 'src/app/Servies/serv-kashrut.service';
import { ServServToSuppService } from 'src/app/Servies/serv-serv-to-supp.service';
import { ServServiceService } from 'src/app/Servies/serv-service.service';
import { ServSuppliersService } from 'src/app/Servies/serv-suppliers.service';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  id = 0;
  idKashrut = 0;
  idInvited = 0;
  idtype = 0;
  url: any = "";
  logo_url: any = "";
  home_url: any = "";
  Images: ImgDto[] = []
  showElement: any;
  Address = new AddressDto();
  categoryList: CategoryDto[] = [];
  AreaList: AreaDto[] = [];
  kashrutList: KashrutDto[] = [];
  hallTypeList: HallTypeDto[] = [];
  serviceList: ServiceDto[] = [];
  selectedCat: string = "";
  idAddress = 0;




  loading$ = this.loader.loading$;

  supplier = new FormGroup(
    {
      category: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(new RegExp("(0)[0-9]")), Validators.maxLength(10), Validators.minLength(9)]),
      area: new FormControl('', [Validators.required]),
      minPrice: new FormControl('', [Validators.required]),
      maxPrice: new FormControl('', [Validators.required]),
      maxInvited: new FormControl('', [Validators.required]),
      minInvited: new FormControl('', [Validators.required]),
      description: new FormControl('',),
      city: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      street: new FormControl('', [Validators.pattern(new RegExp(/^[\u05D0-\u05EA ]+$/i))]),
      number: new FormControl('', Validators.pattern(new RegExp("^[0-9]*$"))),
      kashrut: new FormControl('', [Validators.required]),
      hallType: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      activity_time: new FormControl('', [Validators.pattern(new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]-([0-1]?[0-9]|2[0-4]):[0-5][0-9]$/))]),
    },
  )

  //#region 

  getErrorActivityTime() {
    return this.supplier.get('activity_time')?.hasError('pattern') ? 'לא תקין' :'';
  }

  getMinInvitedError() {
    return this.supplier.get('minInvited')?.hasError('required') ? 'שדה חובה' : '';
  }

  getMaxInvitedError() {
    return this.supplier.get('maxInvited')?.hasError('required') ? 'שדה חובה' : '';
  }

  getMinPriceError() {
    return this.supplier.get('minPrice')?.hasError('required') ? 'שדה חובה' : '';
  }
  getMaxPriceError() {
    return this.supplier.get('maxPrice')?.hasError('required') ? 'שדה חובה' : '';
  }

  getNumberError() {
    return this.supplier.get('number')?.hasError('pattern') ? 'לא חוקי' : '';
  }

  getServiceError() {
    return this.supplier.get('service')?.hasError('required') ? 'שדה חובה' : '';
  }

  getHallTypeError() {
    return this.supplier.get('hallType')?.hasError('required') ? 'שדה חובה' : '';
  }

  getKashrutError() {
    return this.supplier.get('kashrut')?.hasError('required') ? 'שדה חובה' : '';
  }

  getAreaError() {
    return this.supplier.get('area')?.hasError('required') ? 'שדה חובה' : '';
  }

  getCityError() {
    return this.supplier.get('city')?.hasError('required') ? 'שדה חובה' :
      this.supplier.get('city')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getStreetError() {
    return this.supplier.get('street')?.hasError('pattern') ? 'קלט רק בעברית' : '';
  }

  getCategoryError() {
    return this.supplier.get('category')?.hasError('required') ? 'שדה חובה' : '';
  }

  getNameError() {
    return this.supplier.get('name')?.hasError('required') ? 'שדה חובה' : '';
  }

  getErrorPhone() {
    return this.supplier.get('phone')?.hasError('required') ? 'שדה חובה' :
      this.supplier.get('phone')?.hasError('pattern') ? 'לא חוקי' :
        this.supplier.get('phone')?.hasError('minlength') ? 'לא חוקי' :
          this.supplier.get('phone')?.hasError('maxlength') ? 'לא חוקי' : '';
  }


  //#endregion


  onSelectFile(event: any) {
    this.Images = []
    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files && event.target.files[i]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // read file as data url
        reader.onload = (event) => { // called once readAsDataURL is completed
          if (event.target != null) {
            this.url = event.target.result;
            this.Images[i] = new ImgDto(0, this.url, this.id, null, null);
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
          }
          else {
            this.logo_url = event.target.result;
          }
      }
    }
  }

  add() {
    debugger
    if (this.getCategoryError() == '' && this.getNameError() == '' && this.getErrorPhone() == '' &&
      this.getCityError() == '' && this.getAreaError() == '' && this.getMaxPriceError() == '' && this.getMinPriceError() == '') {

      let new_address = new AddressDto();
      let idArea = 0;
      new_address.city = this.supplier.get('city')?.value;
      new_address.street = this.supplier.get('street')?.value;
      new_address.number = this.supplier.get('number')?.value;


      //add address
      this.srv_address.AddAddress(new_address).subscribe(x => {
        if (x != -1) {
          this.AreaList.forEach(element => {
            if (element.area1 == this.supplier.get('area')?.value)
              idArea = element.id;
          });



          if (this.id == 1 && this.getMaxInvitedError() == '' && this.getMinInvitedError() == '' && this.getHallTypeError() == '' && this.getKashrutError() == '') {

            let hall = new HallsDto();
            hall.idAddress = x;
            hall.name = this.supplier.get('name')?.value;
            hall.phone = this.supplier.get('phone')?.value;
            hall.minInvited = this.supplier.get('minInvited')?.value;
            hall.maxInvited = this.supplier.get('maxInvited')?.value;
            hall.minPrice = this.supplier.get('minPrice')?.value;
            hall.maxPrice = this.supplier.get('maxPrice')?.value;
            hall.description = this.supplier.get('description')?.value;
            hall.idKashrut = this.idKashrut;
            hall.idArea = idArea;
            this.setIdInvited(this.supplier.get('maxInvited')?.value);
            hall.idInvited = this.idInvited;
            hall.idtype = this.idtype;
            hall.src = this.home_url;
            hall.srcLogo = this.logo_url;

            this.serv_hall.AddHall(hall).subscribe(b => {
              if (b != -1) {

                this.Images.forEach(element => {
                  element.idHall = b;
                  element.idCategory = 1
                });

                if (this.Images.length != 0)
                  this.serv_img.PostImages(this.Images).subscribe(a => {
                    if (a == false) {
                      this.serv_hall.DeleteHalls(b).subscribe(x => {
                        this.snackBar.open('חלה שגיאה בהוספת תמונות אנא נסה שנית', 'אישור');
                      })
                    }

                    else {
                      this.snackBar.open('הספק התווסף בהצלחה', 'אישור')
                      this.supplier.clearValidators();
                    }
                  })
                else {
                  this.snackBar.open('הספק התווסף בהצלחה', 'אישור')
                  this.supplier.clearValidators();
                }
              }

              else {
                this.serv_hall.DeleteHalls(b).subscribe(x => {
                  this.snackBar.open('חלה שגיאה בהוספה אנא נסה שנית', 'אישור');
                })
              }

            });

          }



          //add supplier
          else {
            if (this.getServiceError() == '') {
              let supp = new SuppliersDto();
              supp.idAddress = x;
              supp.idCategory = this.id;
              supp.name = this.supplier.get('name')?.value;
              supp.phone = this.supplier.get('phone')?.value;
              supp.maxPrice = this.supplier.get('maxPrice')?.value;;
              supp.minPrice = this.supplier.get('minPrice')?.value;
              supp.description = this.supplier.get('description')?.value;
              supp.idArea = idArea;
              supp.src = this.home_url;
              supp.srcLogo = this.logo_url;
              supp.activity_time = this.supplier.get('activity_time')?.value;

              this.serv_supp.AddSupplier(supp).subscribe(z => {
                if (z != -1) {
                  let serv_to_supp: any[] = this.supplier.get('service')?.value;

                  //add service
                  let servtosupp: ServToSuppDto[] = []
                  for (let index = 0; index < this.serviceList.length; index++) {
                    serv_to_supp.forEach(element => {
                      if (element == this.serviceList[index].serv) {
                        let servToSupplier = new ServToSuppDto();
                        servToSupplier.idServ = this.serviceList[index].id;
                        servToSupplier.idSuppliers = z;
                        servtosupp.push(servToSupplier);
                      }
                    });
                  }

                  this.Images.forEach(element => {
                    element.idSuppliers = z;
                    element.idCategory = this.id;
                  });

                  this.serv_to_supp.PostServices(servtosupp).subscribe(y => {
                    if (y == false) {
                      this.serv_supp.DeleteSuppliers(z).subscribe(res => {
                        this.snackBar.open('חלה שגיאה בהוספה שירות אנא נסה שנית', 'אישור');
                      })
                    }
                    else {
                      if (this.Images.length != 0)
                        this.serv_img.PostImages(this.Images).subscribe(a => {
                          if (a == false) {
                            this.serv_supp.DeleteSuppliers(z).subscribe(res => {
                              this.snackBar.open('חלה שגיאה בהוספה שירות אנא נסה שנית', 'אישור');
                            })
                          }
                          else {
                            this.snackBar.open('הספק התווסף בהצלחה', 'אישור')
                            this.supplier.clearValidators();
                            //this.supplier.reset();
                          }
                        })

                      else {
                        this.snackBar.open('הספק התווסף בהצלחה', 'אישור')
                        this.supplier.clearValidators();
                        //this.supplier.reset();
                      }
                    }
                  });
                }

                else {
                  this.serv_supp.DeleteSuppliers(z).subscribe(res => {
                    this.snackBar.open('חלה שגיאה בהוספה ספק אנא נסה שנית', 'אישור');

                  })
                }
              });
            }
          }
        }

        else
          this.snackBar.open('חלה שגיאה בהוספה ספק אנא נסה שנית', 'אישור');
      })
    }
  }

  onChange() {
    this.categoryList.forEach(element => {
      if (element.name == this.supplier.get('category')?.value) {
        this.id = element.id;
        if (element.id != 1)
          this.serv_service.GetListService(element.id).subscribe(x => { this.serviceList = x; });
      }
    });
  }


  onChangeKashrut() {
    this.kashrutList.forEach(element => {
      if (element.kashrut1 == this.supplier.get('kashrut')?.value) {
        this.idKashrut = element.id;
      }
    });
  }


  onChangeIdtype() {
    this.hallTypeList.forEach(element => {
      if (element.type == this.supplier.get('hallType')?.value) {
        this.idtype = element.id;
      }
    });
  }

  setIdInvited(num: number) {
    if (num < 300)
      this.idInvited = 1;
    else if (num < 500)
      this.idInvited = 2;
    else if (num < 700)
      this.idInvited = 3;
    else if (num < 1000)
      this.idInvited = 4;
    else
      this.idInvited = 5;
  }

  constructor(private snackBar: MatSnackBar, private serv_supp: ServSuppliersService, private serv_to_supp: ServServToSuppService,
    private serv_service: ServServiceService, private serv_hallType: ServHallTypeService, private serv_kashrut: ServKashrutService,
    private serv_category: ServCategoryService, private srv_area: ServAreaService, private srv_address: ServAddressService,
    private serv_hall: ServHallsService, private serv_img: ServImgService, public loader: LoadingService) { }


  ngOnInit(): void {
    this.serv_category.GetCategories().subscribe(x => {
      this.categoryList = x;
      this.srv_area.GetArea().subscribe(y => this.AreaList = y);
      this.serv_hallType.GetHallType().subscribe(z => this.hallTypeList = z);
      this.serv_kashrut.GetKashrut().subscribe(r => this.kashrutList = r);
    });

  }

}
