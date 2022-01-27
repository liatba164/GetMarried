import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HallsComponent } from './Component/halls/halls.component';
import { OpinionComponent } from './Component/opinion/opinion.component';
import { ProductsToCustomersComponent } from './Component/products-to-customers/products-to-customers.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SuppliersComponent } from './Component/suppliers/suppliers.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, ControlContainer, NgForm } from '@angular/forms';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { Pathes } from './models/pathes';
import { MatExpansionModule } from '@angular/material/expansion';
import { HallDetailsComponent } from './Component/hall-details/hall-details.component';
import { SupplierDetailsComponent } from './Component/supplier-details/supplier-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './Component/home/home.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { PersonalCenterComponent } from './Component/personal-center/personal-center.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { FilterComponent } from './Component/filter/filter.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { QAComponent } from './Component/qa/qa.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { CheckListComponent } from './Component/check-list/check-list.component';
import { FilterSuppliersComponent } from './Component/filter-suppliers/filter-suppliers.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HistoryComponent } from './Component/history/history.component';
import { SuitChoiceComponent } from './Component/suit-choice/suit-choice.component';
import { TipsForBrideComponent } from './Component/tips-for-bride/tips-for-bride.component';
import { WeddingDressChoiceComponent } from './Component/wedding-dress-choice/wedding-dress-choice.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AddOpinionComponent } from './Component/add-opinion/add-opinion.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './Component/profile/profile.component';
import { DeleteitemComponent } from './Component/deleteitem/deleteitem.component';
import { PowerOffComponent } from './Component/power-off/power-off.component';
import { PersonalCenterManagerComponent } from './Component/personal-center-manager/personal-center-manager.component';
import { AddSupplierComponent } from './Component/add-supplier/add-supplier.component';
import { ShowNewSupplierComponent } from './Component/show-new-supplier/show-new-supplier.component'
import { MatTableModule } from '@angular/material/table';
import { DeleteSupplierComponent } from './Component/delete-supplier/delete-supplier.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateSupplierComponent } from './Component/update-supplier/update-supplier.component';
import { UpdateHallComponent } from './Component/update-hall/update-hall.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './network.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HallsComponent,
    OpinionComponent,
    ProductsToCustomersComponent,
    SuppliersComponent,
    LogInComponent,
    NavBarComponent,
    HallDetailsComponent,
    SupplierDetailsComponent,
    HomeComponent,
    PersonalCenterComponent,
    ForgetPasswordComponent,
    AboutUsComponent,
    FilterComponent,
    FooterComponent,
    ContactUsComponent,
    QAComponent,
    SignUpComponent,
    CheckListComponent,
    FilterSuppliersComponent,
    HistoryComponent,
    SuitChoiceComponent,
    TipsForBrideComponent,
    WeddingDressChoiceComponent,
    AddOpinionComponent,
    ProfileComponent,
    DeleteitemComponent,
    PowerOffComponent,
    PersonalCenterManagerComponent,
    AddSupplierComponent,
    ShowNewSupplierComponent,
    DeleteSupplierComponent,
    UpdateSupplierComponent,
    UpdateHallComponent,
    NotFoundPageComponent,

  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatStepperModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatTreeModule,
    MatGridListModule,
    MatSnackBarModule,
    RouterModule.forRoot(Pathes, {scrollPositionRestoration: 'enabled'}),
    MatSliderModule,
    TreeViewModule,
    BrowserAnimationsModule,

  ],
  exports: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
 { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],

})
export class AppModule { }
