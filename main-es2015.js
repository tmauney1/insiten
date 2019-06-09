(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center;\">{{data.title}}</h1>\n<div mat-dialog-content style=\"text-align: center;\">\n    <p>{{data.errorMessage}}</p>\n</div>\n<div mat-dialog-actions style=\"text-align: center;\">\n    <button style=\"margin: auto\" class=\"btn \" mat-button mat-dialog-close  >Cancel</button>\n    <button style=\"margin: auto\" class=\"btn btn-danger\" (click)=\"removeContact(data.contact);\" mat-button mat-dialog-close>Delete Contact</button>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delete-warning-dialog/delete-warning-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delete-warning-dialog/delete-warning-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center;\">{{data.title}}</h1>\n<div mat-dialog-content style=\"text-align: center;\">\n    <p>{{data.errorMessage}}</p>\n</div>\n<div mat-dialog-actions style=\"text-align: center;\">\n    <button style=\"margin: auto\" class=\"btn\"  mat-button mat-dialog-close >Cancel</button>\n    <button style=\"margin: auto\" class=\"btn btn-danger\" (click)=delete(data.target) mat-button mat-dialog-close>Delete Account</button>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/success-dialog/success-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/success-dialog/success-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align: center;\">{{data.title}}</h1>\n<div mat-dialog-content style=\"text-align: center;\">\n    <p>{{data.errorMessage}}</p>\n</div>\n<div mat-dialog-actions style=\"text-align: center;\">\n  <button style=\"margin: auto\" class=\"btn btn-success\" mat-button mat-dialog-close style='background-color: #5CB85F; color: white;' >OK</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-detail/target-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-detail/target-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"target\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h2 style=\"margin:auto;\">{{target.name | uppercase}}</h2>\n      </div>\n    </div>\n    \n    <div class=\"row\" style=\"box-shadow: 5px 10px 10px 0px rgba(0,0,0,.6); width: 95%; margin:auto;\">\n      <div class=\"col-lg-3 col-lg-offset-0 col-md-4 col-sm-6 col-xs-12 info-div\">\n        <h4 class=\"header-paragraph\">Status: </h4>\n        <p>{{target.status}}</p>\n      </div>\n\n      <div class=\"col-lg-2 col-md-4 col-sm-6 col-xs-12 info-div\">\n        <h4 class=\"header-paragraph\">Account Description:</h4>\n        <p>{{target.companyInfo}}</p>\n       </div>\n       \n       <div class=\"col-lg-2 col-md-4 col-sm-6 col-xs-12 info-div\">\n         <h4 class=\"header-paragraph\">Key Contact(s): </h4>\n         <p *ngFor=\"let keyContact of target.keyContacts\">\n           <span style=\"font-weight: bold\">Name:</span>\n            {{keyContact.name}}<br> \n            <span style=\"font-weight: bold\">Phone:</span> \n            {{keyContact.phoneNumber}}</p>\n        </div>\n        \n        <div class=\"col-lg-2 col-lg-offset-0 col-md-offset-2 col-md-4 col-sm-6 col-xs-12 info-div\">\n          <h4 class=\"header-paragraph\">Address:</h4>\n          <p> {{target.companyAddress.street}}<br>{{target.companyAddress.city}}, {{target.companyAddress.state}} {{target.companyAddress.zipCode}} </p>\n        </div>\n        \n        <div class=\"col-lg-3 col-lg-offset-0 col-md-offset-0 col-md-4 col-sm-offset-3 col-sm-6 col-xs-12 info-div\">\n          <h4 class=\"header-paragraph\">Finacial Performance:</h4>\n          <p> <span style=\"font-weight: bold\">Revenue:</span><br> {{target.financialPerformance.revenue}}</p>\n          <p> <span style=\"font-weight: bold\">Expenses:</span><br> {{target.financialPerformance.expenses}}</p>\n        </div>\n      </div>\n      \n      <div class=\"row\" style=\"margin-top: 20px;\">\n        <div class=\"col-xs-6\" style=\"margin:auto\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit=true;\">Edit/Update Target Info</button>\n        </div>\n        <div class=\"col-xs-6\" style=\"margin:auto\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack();\">Go Back</button>\n        </div>\n      </div>\n    </div>\n\n\n  <div *ngIf=\"edit\" class=\"row\">\n    <div class=\"col-xs-12\">\n      <form #targetEditForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <div class=\"row\">\n\n            <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                <label for=\"targetName\">Target Name</label><br>\n              <input #targetName=\"ngModel\" class=\"form-control\" id=\"targetName\" name=\"targetName\" [(ngModel)]=\"target.name\" placeholder=\"Target Name\" type=\"text\"\n               required />\n            </div>\n            <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n              <label for=\"targetStatus\">Target Status:</label><br>\n                <select class=\"form-control\" id=\"targetStatus\" name=\"targetStatus\" [(ngModel)]=\"target.status\" required>\n                  <option *ngIf =\"(target.status===null)\" disabled [ngValue] = null >&lt;Select an option&gt;</option>\n                  <option *ngFor=\"let targetStatusOption of targetStatusOptions\" [value] = \"targetStatusOption\">{{targetStatusOption}}</option>\n                  <option *ngIf  = \"(target.status!==null)\" [ngValue] = null  >&lt;Remove selection&gt;</option>\n                </select>\n              </div>\n\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <label style=\"text-align: center;\">\n                    Company Address:\n                </label>\n            </div>\n          </div>\n\n        <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetCompanyStreet\">Street:</label><br>\n                <input #targetCompanyStreet=\"ngModel\" class=\"form-control\" id=\"targetCompanyStreet\" name=\"targetCompanyStreet\" [(ngModel)]=\"target.companyAddress.street\" placeholder=\"Company Street\" type=\"text\"\n                 required/>\n              </div>\n              \n              <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                <label for=\"targetCompanyCity\">City:</label><br>\n                  <input #targetCompanyCity=\"ngModel\" class=\"form-control\" id=\"targetCompanyCity\" name=\"targetCompanyCity\" [(ngModel)]=\"target.companyAddress.city\" placeholder=\"Company City\" type=\"text\"\n                         required/>\n              </div>\n\n            </div>\n          </div>\n          \n          <div class=\"form-group\">\n              <div class=\"row\">\n\n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetCompanyState\">State:</label><br>\n                    <select class=\"form-control\" id=\"targetCompanyState\" name=\"targetCompanyState\" [(ngModel)]=\"target.companyAddress.state\" required>\n                      <option *ngIf =\"(target.companyAddress.state===null)\" disabled [ngValue] = null >&lt;Select an option&gt;</option>\n                      <option *ngFor=\"let state of states\" [value] = \"state\">{{state}}</option>\n                      <option *ngIf  = \"(target.companyAddress.state!==null)\" [ngValue] = null  >&lt;Remove selection&gt;</option>\n                    </select>\n                </div>\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetCompanyZip\">Zip Code:</label><br>\n                  <input #targetCompanyZip=\"ngModel\" class=\"form-control\" id=\"targetCompanyZip\" name=\"targetCompanyZip\" [(ngModel)]=\"target.companyAddress.zipCode\" placeholder=\"Company Zip Code\" type=\"text\"\n                         required/>\n                  </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"row\">\n\n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetCompanyInfo\">Company Description/Information:</label><br>\n                    <textarea #targetCompanyInfo=\"ngModel\" class=\"form-control\" id=\"targetCompanyInfo\" name=\"targetCompanyInfo\" [(ngModel)]=\"target.companyInfo\" placeholder=\"Company Zip Code\" type=\"text\" required></textarea>\n                  </div>\n      \n                </div>\n              </div>\n\n             <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center;\">\n                   Contact Names:\n                </label>\n              </div>\n            </div>\n\n          <div class=\"form-group\">\n            <div class=\"row\">\n            \n              <div class=\"col-xs-offset-1 col-sm-offset-4 col-md-offset-4 col-lg-offset-0 col-xs-8 col-sm-8 col-md-6 col-lg-4\" \n                  *ngFor=\"let keyContact of target.keyContacts; let i = index; trackBy: trackByFn\">\n                <input name=\"target.keyContacts.name-{{i}}\"  class=\"form-control\" [(ngModel)]=\"target.keyContacts[i].name\" placeholder=\"Target Name\" type=\"text\"\n                required/>\n                \n                <input name=\"target.keyContacts.phoneNumber-{{i}}\" class=\"form-control\" [(ngModel)]=\"target.keyContacts[i].phoneNumber\" placeholder=\"Target Name\" type=\"text\"\n                  required/><br><br><br><br>\n                  <button class=\"btn btn-danger\" (click)=\"onSelect(target.keyContacts[i])\" (click)=\"openDeleteContactWarningDialog();\"  style=\"margin-left: -90px;\">Delete</button>\n              </div>\n\n            </div>\n          </div>\n\n          <div *ngIf=\"!addContactForm\" class=\"row\">\n              <div class=\"col-xs-12\">\n                  <button class=\"btn\" (click)=\"addContactForm=true;\">Add Contact</button>\n              </div>\n            </div>\n\n          <div *ngIf=\"addContactForm\"  class=\"row\">\n            <form>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-8 col-md-4\">\n                    <label for=\"addContactName\">Contact Name:</label><br>\n                    <input name=\"addContactName\" class=\"form-control\" [(ngModel)]=\"addContactName\" type=\"text\" placeholder=\"First Name Last Name\" maxlength=\"50\" required />\n                  \n                    <div class=\"row\"> \n                      <div class=\"col-xs-12\">\n                      </div> \n                    </div>\n                  </div>\n                  \n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-8 col-md-4\">\n                    <label for=\"addContactPhoneNumber\">Contact Phone Number:</label><br>\n                    <input  #contactPhoneNumber=\"ngModel\" class=\"form-control\" name=\"addContactPhoneNumber\" [(ngModel)]=\"addContactPhoneNumber\" type=\"text\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" maxlength=\"12\" placeholder=\"999-999-9999\" required/>\n                     <div class=\"row\">\n                       <div class=\"col-xs-6\">\n                         <p *ngIf=\"!contactPhoneNumber.valid && !contactPhoneNumber.pristine\" class=\"alert alert-danger\">999-999-9999</p>\n                        </div> \n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <button class=\"btn btn-success\" type=\"submit\" value=\"submit\" [disabled]=\"!addContactName || !addContactPhoneNumber || !contactPhoneNumber.valid\" \n                            (click)=\"addContact(addContactName, addContactPhoneNumber);\"\n                            (click)=\"addContactForm=false;\"\n                        >Add Contact</button>\n                    \n                    <button class=\"btn btn-warn\" (click)=\"addContactForm=false;\"\n                            (click)=\"addContactName=null\"\n                            (click)=\"addContactPhoneNumber=null\"\n                            (click)=\"contactPhoneNumber.markAsPristine\">Discard</button>\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n\n          <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center\">\n                  Finacial Performance:\n                </label>\n              </div>\n            </div>\n\n          <div class=\"form-group\">\n              <div class=\"row\">\n\n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetRevenue\">Revenue:</label><br>\n                  <input #targetRevenue=\"ngModel\" class=\"form-control\" id=\"targetRevenue\" name=\"targetRevenue\" [(ngModel)]=\"target.financialPerformance.revenue\" placeholder=\"Revenue\" type=\"text\"\n                   required/>\n                </div>\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetExpenses\">Expenses:</label><br>\n                   <input #targetExpenses=\"ngModel\" class=\"form-control\" id=\"targetExpenses\" name=\"targetExpenses\" [(ngModel)]=\"target.financialPerformance.expenses\" placeholder=\"Expenses\" type=\"text\"\n                           required/>\n                  </div>\n                  \n              </div>\n            </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" form=\"targetEditForm\" [disabled]=(!targetEditForm.valid) class=\"btn btn-success\" \n                    (click)=\"onSaveChanges();\" \n                    (click)=\"edit=false;\"\n                    (click)=\"targetService.openSubmitSuccessDialog();\">Save</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/targets/targets.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/targets/targets.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 contact-table-div\">\n\n        <table style=\"width: 100%; margin:auto;\">\n            <tr class=\"table-header\">\n              <th>Account ID</th>\n              <th>Account Name</th>\n              <th></th>\n              <th>Date Last Updated</th>\n            </tr>\n            <tr *ngFor=\"let target of targets\" style=\"text-align: left;\">\n                <td>{{target.id}}</td>\n                <td>{{target.name}}</td>\n                <td>\n                  <a routerLink=\"/detail/{{target.id}}\">\n                    <button class=\"btn btn-primary view-button\">View/Edit</button>\n                  </a>\n                  <button class=\"btn btn-danger delete-button\" (click)=\"onSelect(target)\" (click)=\"openDeleteWarningDialog();\" >Delete</button>\n                </td>\n                <td>{{target.dateLastUpdated | date}}</td>\n              </tr>\n          </table>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"!addTargetForm\" class=\"row\">\n    <div class=\"col-xs-12 \" style=\"margin-top: 20px; text-align: right;\">\n        <button class=\"btn btn-primary\" style=\"margin-right: 20px;\" (click)=\"addTargetForm=true\">Add New Target Company</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"addTargetForm\" class=\"row\" style=\"margin-top:30px;\">\n    <div class=\"col-xs-12\">\n\n        <form #targetAddForm=\"ngForm\" (keydown.enter)=\"$event.preventDefault()\">\n            <div class=\"form-group\">\n                <div class=\"row\">\n                \n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\" >\n                      <label for=\"targetName\" >Target Company Name:</label><br>\n                      <input #targetName  class=\"form-control\" name=\"targetName\" type=\"text\" [(ngModel)]=\"target.name\" placeholder=\"Target Company Name\" maxlength=\"50\" required />\n                  </div>\n\n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetStatus\" >Target Company Status:</label><br>\n                    <select #targetStatus  class=\"form-control\" name=\"targetStatus\" type=\"text\" placeholder=\"contact name\" [(ngModel)]=\"target.status\" required >\n                      <option></option>\n                      <option>Researching</option>\n                      <option>Pending Approval</option>\n                      <option>Approved</option>\n                      <option>Declined</option>\n                    </select>\n                  </div>\n\n                </div>\n              </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center;\">\n                      Company Address:\n                </label>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n\n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetCompanyStreet\">Street:</label><br>\n                    <input #targetCompanyStreet class=\"form-control\" name=\"targetCompanyStreet\" [(ngModel)]=\"target.companyAddress.street\" type=\"text\" placeholder=\"Street\" maxlength=\"50\" required />\n                  </div>\n                  \n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetCompanyCity\">City:</label><br>\n                    <input #targetCompanyCity class=\"form-control\" name=\"targetCompanyCity\" [(ngModel)]=\"target.companyAddress.city\" type=\"text\" placeholder=\"City\" maxlength=\"50\" required />\n                  </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetCompanyState\">State:</label><br>\n                    <select #targetCompanyState class=\"form-control\" [(ngModel)]=\"target.companyAddress.state\" id=\"targetCompanyState\" name=\"targetCompanyState\" required >\n                      <option></option>\n                      <option *ngFor=\"let state of states\" [value] = \"state\">{{state}}</option>\n                    </select>\n                  </div>\n                  \n                  <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                    <label for=\"targetCompanyZip\">Zip Code:</label><br>\n                    <input #targetCompanyZip class=\"form-control\" [(ngModel)]=\"target.companyAddress.zipCode\" name=\"targetCompanyZip\" type=\"text\" placeholder=\"Zip Code\" maxlength=\"6\" required />\n                  </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                  \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetCompanyInfo\">Company Description/Information:</label><br>\n                  <textarea #targetCompanyInfo class=\"form-control\" [(ngModel)]=\"target.companyInfo\" name=\"targetCompanyInfo\" maxlength=\"250\" required ></textarea>\n                </div>\n              </div>\n            </div>\n          \n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center;\">\n                  Key Contact:\n                </label>\n              </div>\n            </div>\n\n            \n            <div class=\"form-group\">\n              <div class=\"row\">\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetContactName\">Contact Name:</label><br>\n                  <input #targetKeyContactName class=\"form-control\" [(ngModel)]=\"target.keyContacts.name\" name=\"targetKeyContactName\" type=\"text\" placeholder=\"Contact Name\" maxlength=\"50\" required/>\n                </div>\n\n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetContactPhoneNumber\">Contact Phone Number:</label><br>\n                  <input #targetKeyContactPhoneNumber=\"ngModel\" class=\"form-control\" [(ngModel)]=\"target.keyContacts.phoneNumber\" name=\"targetKeyContactPhoneNumber\" type=\"text\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\" maxlength=\"12\" placeholder=\"999-999-9999\" required />\n                \n                  <div class=\"row\"> \n                    <div class=\"col-xs-6\">\n                      <p *ngIf=\"!targetKeyContactPhoneNumber.valid && !targetKeyContactPhoneNumber.pristine\" class=\"alert alert-danger\">999-999-9999</p>\n                    </div> \n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-top: -50px; margin-bottom: 15px;\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center;\">\n                      (Additional contacts can be added after submission)\n                </label>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <label style=\"text-align: center\">\n                  Finacial Performance:\n                </label>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetRevenue\">Revenue:</label><br>\n                  <input #targetRevenue class=\"form-control\" [(ngModel)]=\"target.financialPerformance.revenue\" name=\"targetRevenue\" type=\"text\" placeholder=\"Revenue\" maxlength=\"13\" required />\n                </div>\n                \n                <div class=\"col-xs-offset-1 col-sm-offset-3 col-md-offset-0 col-xs-11 col-sm-9 col-md-4\">\n                  <label for=\"targetExpenses\"> Expenses:</label><br>\n                  <input #targetExpenses class=\"form-control\" [(ngModel)]=\"target.financialPerformance.expenses\" name=\"targetExpenses\" type=\"text\" placeholder=\"Expenses\" maxlength=\"13\" required />\n                </div>\n                \n              </div>\n            </div>\n                  \n            <button class=\"btn btn-success\" style=\"margin-bottom: 10px;\" type=\"submit\" form=\"targetAddForm\" [disabled]=(!targetAddForm.valid) \n                    (click)=\"add(target.name, target.status, target.companyAddress.street,\n                                  target.companyAddress.city, target.companyAddress.state, target.companyAddress.zipCode,\n                                  target.companyInfo, target.keyContacts.name, target.keyContacts.phoneNumber,\n                                  target.financialPerformance.revenue, target.financialPerformance.expenses); \n                            target.name='';\n                            target.status='';\n                            target.companyAddress.street='';\n                            target.companyAddress.city='';\n                            target.companyAddress.state='';\n                            target.companyAddress.zipCode='';\n                            target.companyInfo='';\n                            target.keyContacts.name='';\n                            target.keyContacts.phoneNumber='';\n                            target.financialPerformance.revenue='';\n                            target.financialPerformance.expenses='';\"\n                    (click)=\"addTargetForm=false;\"\n                    (click)=\"targetService.openSubmitSuccessDialog();\">Add Contact</button>\n\n            <button class=\"btn discard-button\" (click)=\"addTargetForm=false\">Cancel</button>\n          </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _targets_targets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./targets/targets.component */ "./src/app/targets/targets.component.ts");
/* harmony import */ var _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target-detail/target-detail.component */ "./src/app/target-detail/target-detail.component.ts");





const routes = [
    { path: '', redirectTo: '/targets', pathMatch: 'full' },
    { path: 'detail/:id', component: _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_4__["TargetDetailComponent"] },
    { path: 'targets', component: _targets_targets_component__WEBPACK_IMPORTED_MODULE_3__["TargetsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'insiten';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _targets_targets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./targets/targets.component */ "./src/app/targets/targets.component.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./target-detail/target-detail.component */ "./src/app/target-detail/target-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./success-dialog/success-dialog.component */ "./src/app/success-dialog/success-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-warning-dialog/delete-warning-dialog.component */ "./src/app/delete-warning-dialog/delete-warning-dialog.component.ts");
/* harmony import */ var _delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-contact-warning-dialog/delete-contact-warning-dialog.component */ "./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _targets_targets_component__WEBPACK_IMPORTED_MODULE_6__["TargetsComponent"],
            _target_detail_target_detail_component__WEBPACK_IMPORTED_MODULE_9__["TargetDetailComponent"],
            _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SuccessDialogComponent"],
            _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DeleteWarningDialogComponent"],
            _delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_15__["DeleteContactWarningDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"], { dataEncapsulation: false }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"]
        ],
        providers: [],
        entryComponents: [_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SuccessDialogComponent"], _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DeleteWarningDialogComponent"], _delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_15__["DeleteContactWarningDialogComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1jb250YWN0LXdhcm5pbmctZGlhbG9nL2RlbGV0ZS1jb250YWN0LXdhcm5pbmctZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DeleteContactWarningDialogData, DeleteContactWarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContactWarningDialogData", function() { return DeleteContactWarningDialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteContactWarningDialogComponent", function() { return DeleteContactWarningDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");




class DeleteContactWarningDialogData {
}
let DeleteContactWarningDialogComponent = class DeleteContactWarningDialogComponent {
    constructor(dialogRef, data, targetService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.targetService = targetService;
    }
    delete(target) {
        console.log(this.data.targets);
        this.data.targets = this.data.targets.filter(h => h !== target);
        console.log(this.data.targets);
        this.targetService.deleteTarget(target).subscribe();
    }
    removeContact(contact) {
        //console.log (this.target.keyContacts);
        this.data.target.keyContacts = this.data.target.keyContacts.filter(i => i !== contact);
        //console.log (this.target.keyContacts);
    }
};
DeleteContactWarningDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-contact-warning-dialog',
        template: __webpack_require__(/*! raw-loader!./delete-contact-warning-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.html"),
        styles: [__webpack_require__(/*! ./delete-contact-warning-dialog.component.css */ "./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], DeleteContactWarningDialogData, _target_service__WEBPACK_IMPORTED_MODULE_3__["TargetService"]])
], DeleteContactWarningDialogComponent);



/***/ }),

/***/ "./src/app/delete-warning-dialog/delete-warning-dialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/delete-warning-dialog/delete-warning-dialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS13YXJuaW5nLWRpYWxvZy9kZWxldGUtd2FybmluZy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/delete-warning-dialog/delete-warning-dialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/delete-warning-dialog/delete-warning-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeleteWarningDialogData, DeleteWarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWarningDialogData", function() { return DeleteWarningDialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWarningDialogComponent", function() { return DeleteWarningDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");




class DeleteWarningDialogData {
}
let DeleteWarningDialogComponent = class DeleteWarningDialogComponent {
    constructor(dialogRef, data, targetService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.targetService = targetService;
    }
    delete(target) {
        console.log(this.data.targets);
        this.data.targets = this.data.targets.filter(h => h !== target);
        console.log(this.data.targets);
        this.targetService.deleteTarget(target).subscribe();
    }
};
DeleteWarningDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-warning-dialog',
        template: __webpack_require__(/*! raw-loader!./delete-warning-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/delete-warning-dialog/delete-warning-dialog.component.html"),
        styles: [__webpack_require__(/*! ./delete-warning-dialog.component.css */ "./src/app/delete-warning-dialog/delete-warning-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], DeleteWarningDialogData, _target_service__WEBPACK_IMPORTED_MODULE_3__["TargetService"]])
], DeleteWarningDialogComponent);



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    createDb() {
        const targets = [
            { id: 11,
                name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01"
            },
            { id: 12, name: 'Bill International',
                status: "Researching",
                companyAddress: {
                    street: "111 Brownlee Rd.",
                    city: "Atlanta",
                    state: "GA",
                    zipCode: "20202"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'John Doe',
                        phoneNumber: '828-554-2200'
                    },
                    {
                        name: 'Jill Anderson',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '833-244-4004'
                    }
                ],
                financialPerformance: {
                    revenue: "$100,000",
                    expenses: "$50,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 13, name: 'Lewisvill Banking',
                status: "Researching",
                companyAddress: {
                    street: "1928 Washington Blvd.",
                    city: "Seatle",
                    state: "WA",
                    zipCode: "98748"
                },
                companyInfo: "This is a bank",
                keyContacts: [
                    {
                        name: 'Hillary Smith',
                        phoneNumber: '828-554-2200'
                    },
                    {
                        name: 'James Jameson',
                        phoneNumber: '777-913-1003'
                    },
                ],
                financialPerformance: {
                    revenue: "$10,000",
                    expenses: "$50,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 14, name: 'Lewisvill Banking',
                status: "Researching",
                companyAddress: {
                    street: "1928 Washington Blvd.",
                    city: "Seatle",
                    state: "WA",
                    zipCode: "98748"
                },
                companyInfo: "This is a bank",
                keyContacts: [
                    {
                        name: 'Hillary Smith',
                        phoneNumber: '828-554-2200'
                    },
                    {
                        name: 'James Jameson',
                        phoneNumber: '777-913-1003'
                    },
                ],
                financialPerformance: {
                    revenue: "$10,000",
                    expenses: "$50,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 15, name: 'Bill International',
                status: "Researching",
                companyAddress: {
                    street: "111 Brownlee Rd.",
                    city: "Atlanta",
                    state: "GA",
                    zipCode: "20202"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'John Doe',
                        phoneNumber: '828-554-2200'
                    },
                    {
                        name: 'Jill Anderson',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '833-244-4004'
                    }
                ],
                financialPerformance: {
                    revenue: "$100,000",
                    expenses: "$50,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 16, name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 17, name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 18, name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 19, name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01" },
            { id: 20, name: 'Smith Accounting',
                status: "Researching",
                companyAddress: {
                    street: "7428 Creek Rd.",
                    city: "New York",
                    state: "NY",
                    zipCode: "36945"
                },
                companyInfo: "This is an Accounting Firm",
                keyContacts: [
                    {
                        name: 'Willy Smithson',
                        phoneNumber: '877-524-2200'
                    },
                    {
                        name: 'Anderson Jillington',
                        phoneNumber: '777-913-1003'
                    },
                    {
                        name: 'Suzanne Whichet',
                        phoneNumber: '899-484-5758'
                    }
                ],
                financialPerformance: {
                    revenue: "$200,000",
                    expenses: "$150,000"
                },
                dateLastUpdated: "2019-01-01" }
        ];
        return { targets };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(targets) {
        return targets.length > 0 ? Math.max(...targets.map(target => target.id)) + 1 : 11;
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MessageService);



/***/ }),

/***/ "./src/app/models/address.ts":
/*!***********************************!*\
  !*** ./src/app/models/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
class Address {
}


/***/ }),

/***/ "./src/app/models/financial-idicators.ts":
/*!***********************************************!*\
  !*** ./src/app/models/financial-idicators.ts ***!
  \***********************************************/
/*! exports provided: FinancialIdicators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialIdicators", function() { return FinancialIdicators; });
class FinancialIdicators {
}


/***/ }),

/***/ "./src/app/models/states.ts":
/*!**********************************!*\
  !*** ./src/app/models/states.ts ***!
  \**********************************/
/*! exports provided: States */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
var States;
(function (States) {
    States["AL"] = "AL";
    States["AK"] = "AK";
    States["AZ"] = "AZ";
    States["AR"] = "AR";
    States["CA"] = "CA";
    States["CO"] = "CO";
    States["CT"] = "CT";
    States["DE"] = "DE";
    States["FL"] = "FL";
    States["GA"] = "GA";
    States["HI"] = "HI";
    States["ID"] = "ID";
    States["IL"] = "IL";
    States["IN"] = "IN";
    States["IA"] = "IA";
    States["KS"] = "KS";
    States["KY"] = "KY";
    States["LA"] = "LA";
    States["ME"] = "ME";
    States["MD"] = "MD";
    States["MA"] = "MA";
    States["MI"] = "MI";
    States["MN"] = "MN";
    States["MS"] = "MS";
    States["MO"] = "MO";
    States["MT"] = "MT";
    States["NE"] = "NE";
    States["NV"] = "NV";
    States["NH"] = "NH";
    States["NJ"] = "NJ";
    States["NM"] = "NM";
    States["NY"] = "NY";
    States["NC"] = "NC";
    States["ND"] = "ND";
    States["OH"] = "OH";
    States["OK"] = "OK";
    States["OR"] = "OR";
    States["PA"] = "PA";
    States["RI"] = "RI";
    States["SC"] = "SC";
    States["SD"] = "SD";
    States["TN"] = "TN";
    States["TX"] = "TX";
    States["UT"] = "UT";
    States["VT"] = "VT";
    States["VA"] = "VA";
    States["WA"] = "WA";
    States["WV"] = "WV";
    States["WI"] = "WI";
    States["WY"] = "WY";
})(States || (States = {}));


/***/ }),

/***/ "./src/app/models/status.ts":
/*!**********************************!*\
  !*** ./src/app/models/status.ts ***!
  \**********************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status["Researching"] = "Researching";
    Status["Pending Approval"] = "Pending Approval";
    Status["Approved"] = "Approved";
    Status["Declined"] = "Declined";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/models/target.ts":
/*!**********************************!*\
  !*** ./src/app/models/target.ts ***!
  \**********************************/
/*! exports provided: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
class Target {
}


/***/ }),

/***/ "./src/app/success-dialog/success-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/success-dialog/success-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3MtZGlhbG9nL3N1Y2Nlc3MtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/success-dialog/success-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/success-dialog/success-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: SuccessDialogData, SuccessDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialogData", function() { return SuccessDialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialogComponent", function() { return SuccessDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



class SuccessDialogData {
}
let SuccessDialogComponent = class SuccessDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
};
SuccessDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'success-dialog-component',
        template: __webpack_require__(/*! raw-loader!./success-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/success-dialog/success-dialog.component.html"),
        styles: [__webpack_require__(/*! ./success-dialog.component.css */ "./src/app/success-dialog/success-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], SuccessDialogData])
], SuccessDialogComponent);



/***/ }),

/***/ "./src/app/target-detail/target-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/target-detail/target-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\ninput{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\nselect{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\ntextarea{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\n.table-header{\r\n    background:#337ab7;\r\n    border-bottom: solid 2px #337ab7;\r\n    color: white;\r\n}\r\n\r\ntd{\r\n    vertical-align: top;\r\n    text-align: left;\r\n}\r\n\r\ntd, th{\r\n    padding: 5px;\r\n}\r\n\r\n.info-div{\r\n    word-break: break-word;\r\n    padding: 0px;\r\n}\r\n\r\n.header-paragraph{\r\n    background: #337ab7; \r\n    color: white; \r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZ2V0LWRldGFpbC90YXJnZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdGFyZ2V0LWRldGFpbC90YXJnZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMzdhYjc7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzMzN2FiNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQsIHRoe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaW5mby1kaXZ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXBhcmFncmFwaHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzdhYjc7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/target-detail/target-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/target-detail/target-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: TargetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetDetailComponent", function() { return TargetDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _models_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/status */ "./src/app/models/status.ts");
/* harmony import */ var _models_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/states */ "./src/app/models/states.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete-contact-warning-dialog/delete-contact-warning-dialog.component */ "./src/app/delete-contact-warning-dialog/delete-contact-warning-dialog.component.ts");









let TargetDetailComponent = class TargetDetailComponent {
    constructor(route, targetService, location, dialog) {
        this.route = route;
        this.targetService = targetService;
        this.location = location;
        this.dialog = dialog;
        this.edit = false;
        this.editContact = false;
        this.targetStatusOptions = Object.keys(_models_status__WEBPACK_IMPORTED_MODULE_5__["Status"]);
        this.states = Object.keys(_models_states__WEBPACK_IMPORTED_MODULE_6__["States"]);
        this.addContactForm = false;
        this.addContactName = '';
        this.addContactPhoneNumber = '';
    }
    ngOnInit() {
        this.getTarget();
    }
    getTarget() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.targetService.getTarget(id)
            .subscribe(target => this.target = target);
    }
    onSaveChanges() {
        this.target.dateLastUpdated = new Date;
        this.targetService.updateTarget(this.target).subscribe();
    }
    trackByFn(index, item) {
        return index;
    }
    addContact(addContactName, addContactPhoneNumber) {
        let obj;
        obj = { name: addContactName, phoneNumber: addContactPhoneNumber };
        this.target.keyContacts.push(obj);
        this.addContactName = '';
        this.addContactPhoneNumber = '';
    }
    goBack() {
        this.location.back();
    }
    //Sets chosen account to be used in DeleteContactWarningDialog
    onSelect(contact) {
        this.selectedContact = contact;
    }
    openDeleteContactWarningDialog() {
        // Create a dialog configuration so we can customize the dialog. 
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '450px';
        dialogConfig.panelClass = "warning-dialog";
        // Add the data that we're going to pass to the dialog to the config.
        const dialogData = new _delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteContactWarningDialogData"]();
        dialogData.title = 'Warning';
        dialogData.errorMessage = 'Are you sure you want to delete this contact?';
        dialogData.contact = this.selectedContact;
        dialogData.target = this.target;
        dialogConfig.data = dialogData;
        // Open the dialog.
        const dialogRef = this.dialog.open(_delete_contact_warning_dialog_delete_contact_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteContactWarningDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
        });
    }
};
TargetDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-target-detail',
        template: __webpack_require__(/*! raw-loader!./target-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-detail/target-detail.component.html"),
        styles: [__webpack_require__(/*! ./target-detail.component.css */ "./src/app/target-detail/target-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _target_service__WEBPACK_IMPORTED_MODULE_3__["TargetService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], TargetDetailComponent);



/***/ }),

/***/ "./src/app/target.service.ts":
/*!***********************************!*\
  !*** ./src/app/target.service.ts ***!
  \***********************************/
/*! exports provided: TargetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetService", function() { return TargetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./success-dialog/success-dialog.component */ "./src/app/success-dialog/success-dialog.component.ts");








const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let TargetService = class TargetService {
    constructor(http, messageService, dialog) {
        this.http = http;
        this.messageService = messageService;
        this.dialog = dialog;
        this.targetsUrl = 'api/targets';
    }
    getTargets() {
        return this.http.get(this.targetsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched targets')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTargets', [])));
    }
    getTarget(id) {
        const url = `${this.targetsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`fetched target id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getTarget id=${id}`)));
    }
    updateTarget(target) {
        return this.http.put(this.targetsUrl, target, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`updated target id=${target.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTarget')));
    }
    addTarget(target) {
        return this.http.post(this.targetsUrl, target, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((newTarget) => this.log(`added target w/ id=${newTarget.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addtarget')));
    }
    deleteTarget(target) {
        const id = typeof target === 'number' ? target : target.id;
        const url = `${this.targetsUrl}/${id}`;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log(`deleted target id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTarget')));
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        this.messageService.add(`TargetService: ${message}`);
    }
    openSubmitSuccessDialog() {
        // Create a dialog configuration so we can customize the dialog. 
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '450px';
        dialogConfig.panelClass = "success-dialog";
        // Add the data that we're going to pass to the dialog to the config.
        const dialogData = new _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SuccessDialogData"]();
        dialogData.title = 'Success';
        dialogData.errorMessage = 'The submitted data was successfully saved';
        dialogConfig.data = dialogData;
        // Open the dialog.
        this.dialog.open(_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SuccessDialogComponent"], dialogConfig);
    }
};
TargetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], TargetService);



/***/ }),

/***/ "./src/app/targets/targets.component.css":
/*!***********************************************!*\
  !*** ./src/app/targets/targets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n\r\ninput{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\nselect{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\ntextarea{\r\n    width: 55%;\r\n    float: left;\r\n}\r\n\r\n.contact-table-div{\r\n    width: 98%;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n    box-shadow: 5px 10px 10px 0px rgba(0,0,0,.6);\r\n}\r\n\r\n.table-header{\r\n    background:#337ab7;\r\n    border-bottom: solid 2px #337ab7;\r\n    color: white;\r\n}\r\n\r\n.table-header:hover{\r\n    background:#337ab7;\r\n    border-bottom: solid 2px #337ab7;\r\n    color: white;\r\n}\r\n\r\ntd, th{\r\n    padding: 5px;\r\n}\r\n\r\ntr:nth-child(even){\r\n    background-color: #f2f2f2;\r\n}\r\n\r\ntr:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n.delete-button{\r\n    margin-left: 5px;\r\n}\r\n\r\n.view-button{\r\n    margin-left: 5px;\r\n}\r\n\r\n.discard-button{\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZ2V0cy90YXJnZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90YXJnZXRzL3RhcmdldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNvbnRhY3QtdGFibGUtZGl2e1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsLjYpO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDojMzM3YWI3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICMzMzdhYjc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMzdhYjc7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzMzN2FiNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGQsIHRoe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG50cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi52aWV3LWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5kaXNjYXJkLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/targets/targets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/targets/targets.component.ts ***!
  \**********************************************/
/*! exports provided: TargetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetsComponent", function() { return TargetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/target */ "./src/app/models/target.ts");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../target.service */ "./src/app/target.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _models_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/states */ "./src/app/models/states.ts");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/address */ "./src/app/models/address.ts");
/* harmony import */ var _models_financial_idicators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/financial-idicators */ "./src/app/models/financial-idicators.ts");
/* harmony import */ var _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../delete-warning-dialog/delete-warning-dialog.component */ "./src/app/delete-warning-dialog/delete-warning-dialog.component.ts");









let TargetsComponent = class TargetsComponent {
    constructor(targetService, dialog) {
        this.targetService = targetService;
        this.dialog = dialog;
        this.states = Object.keys(_models_states__WEBPACK_IMPORTED_MODULE_5__["States"]);
        this.addTargetForm = false;
    }
    ngOnInit() {
        this.getTargets();
        //Creates an empty target object for adding a new account target
        this.target = new _models_target__WEBPACK_IMPORTED_MODULE_2__["Target"]();
        this.target.id = null;
        this.target.name = '';
        this.target.status = '';
        this.target.companyAddress = new _models_address__WEBPACK_IMPORTED_MODULE_6__["Address"]();
        this.target.companyInfo = '';
        this.target.keyContacts = [{ name: null, phoneNumber: null }];
        this.target.financialPerformance = new _models_financial_idicators__WEBPACK_IMPORTED_MODULE_7__["FinancialIdicators"];
        this.target.dateLastUpdated = null;
    }
    getTargets() {
        this.targetService.getTargets()
            .subscribe(targets => this.targets = targets);
    }
    //Sets chosen account to be used in DeleteWarningDialog
    onSelect(target) {
        this.selectedTarget = target;
    }
    //Add new account target
    add(targetName, targetStatus, targetCompanyStreet, targetCompanyCity, targetCompanyState, targetCompanyZip, targetCompanyInfo, targetKeyContactName, targetKeyContactPhoneNumber, targetRevenue, targetExpenses) {
        const obj = {
            name: targetName,
            status: targetStatus,
            companyAddress: {
                street: targetCompanyStreet,
                city: targetCompanyCity,
                state: targetCompanyState,
                zipCode: targetCompanyZip
            },
            companyInfo: targetCompanyInfo,
            keyContacts: [
                {
                    name: targetKeyContactName,
                    phoneNumber: targetKeyContactPhoneNumber
                }
            ],
            financialPerformance: {
                revenue: targetRevenue,
                expenses: targetExpenses
            },
            dateLastUpdated: new Date(),
        };
        this.targetService.addTarget(obj)
            .subscribe(target => {
            this.targets.push(target);
        });
    }
    openDeleteWarningDialog() {
        // Create a dialog configuration so we can customize the dialog. 
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '450px';
        dialogConfig.panelClass = "warning-dialog";
        // Add the data that we're going to pass to the dialog to the config.
        const dialogData = new _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteWarningDialogData"]();
        dialogData.title = 'Warning';
        dialogData.errorMessage = 'Are you sure you want to delete this account?';
        dialogData.targets = this.targets;
        dialogData.target = this.selectedTarget;
        dialogConfig.data = dialogData;
        // Open the dialog.
        const dialogRef = this.dialog.open(_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteWarningDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.getTargets();
        });
    }
};
TargetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-targets',
        template: __webpack_require__(/*! raw-loader!./targets.component.html */ "./node_modules/raw-loader/index.js!./src/app/targets/targets.component.html"),
        styles: [__webpack_require__(/*! ./targets.component.css */ "./src/app/targets/targets.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_target_service__WEBPACK_IMPORTED_MODULE_3__["TargetService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], TargetsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Trent Mauney\insiten\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map