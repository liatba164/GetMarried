import { Routes } from "@angular/router";
import { HallDetailsComponent } from "../Component/hall-details/hall-details.component";
import { HallsComponent } from "../Component/halls/halls.component";
import { HomeComponent } from "../Component/home/home.component";
import { LogInComponent } from "../Component/log-in/log-in.component";
import { SuppliersComponent } from "../Component/suppliers/suppliers.component";
import { OpinionComponent } from "../Component/opinion/opinion.component";
import { ForgetPasswordComponent } from "../Component/forget-password/forget-password.component";
import { PersonalCenterComponent } from "../Component/personal-center/personal-center.component";
import { SupplierDetailsComponent } from "../Component/supplier-details/supplier-details.component";
import { FilterComponent } from "../Component/filter/filter.component";
import { AboutUsComponent } from "../Component/about-us/about-us.component";
import { ContactUsComponent } from "../Component/contact-us/contact-us.component";
import { QAComponent } from "../Component/qa/qa.component";
import { SignUpComponent } from "../Component/sign-up/sign-up.component";
import { CheckListComponent } from "../Component/check-list/check-list.component";
import { SuitChoiceComponent } from "../Component/suit-choice/suit-choice.component";
import { TipsForBrideComponent } from "../Component/tips-for-bride/tips-for-bride.component";
import { WeddingDressChoiceComponent } from "../Component/wedding-dress-choice/wedding-dress-choice.component";
import { ProductsToCustomersComponent } from "../Component/products-to-customers/products-to-customers.component";
import { ProfileComponent } from "../Component/profile/profile.component";
import { HistoryComponent } from "../Component/history/history.component";
import { PersonalCenterManagerComponent } from "../Component/personal-center-manager/personal-center-manager.component";
import { ShowNewSupplierComponent } from "../Component/show-new-supplier/show-new-supplier.component";
import { AddSupplierComponent } from "../Component/add-supplier/add-supplier.component";
import { DeleteSupplierComponent } from "../Component/delete-supplier/delete-supplier.component";
import { UpdateHallComponent } from "../Component/update-hall/update-hall.component";
import { NotFoundPageComponent } from "../Component/not-found-page/not-found-page.component";

export const Pathes: Routes = [
  { path: "log-in", component: LogInComponent },
  { path: "Halls", component: HallsComponent },
  { path: "Halls/:arr", component: HallsComponent },
  { path: "Suppliers/:num", component: SuppliersComponent },
  { path: "Opinion", component: OpinionComponent },
  { path: "Hall-Details/:id", component: HallDetailsComponent },
  { path: "Supplier-Details/:id", component: SupplierDetailsComponent },
  { path: "", component: HomeComponent },
  { path: "ForgetPassword", component: ForgetPasswordComponent },
  { path: "Filter", component: FilterComponent },
  { path: "About-Us", component: AboutUsComponent },
  { path: "ContactUs", component: ContactUsComponent },
  { path: "QA", component: QAComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "CheckList", component: CheckListComponent },
  { path: "WeddingDressChoice", component: WeddingDressChoiceComponent },
  { path: "TipsForBride", component: TipsForBrideComponent },
  { path: "SuitChoice", component: SuitChoiceComponent },
  { path: "update", component: UpdateHallComponent },



  {
    path: 'PersonalCenter', component: PersonalCenterComponent, children: [
      { path: 'ProductToCustomer', component: ProductsToCustomersComponent },
      { path: 'CheckList', component: CheckListComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'history', component: HistoryComponent },
    ]
  },
  {
    path: 'PersonalCenterManager', component: PersonalCenterManagerComponent, children: [
      { path: 'ShowNewSupplier', component: ShowNewSupplierComponent },
      { path: 'AddSupplier', component: AddSupplierComponent },
      { path: 'DeleteSupplier', component: DeleteSupplierComponent },

    ]
  },
  { path: "**", component: NotFoundPageComponent },
]