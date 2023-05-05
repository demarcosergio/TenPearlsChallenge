import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  editContactForm: contactForm = new contactForm();

  @ViewChild("contactForm")
  contactForm!: NgForm;

  isSubmitted: boolean = false;
  contactId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.params['contactId'];
    this.getContactDetailById();
  }
  getContactDetailById() {
    this.httpProvider.getContactDetailById(this.contactId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editContactForm.ContactId = resultData.result.contactId;
          this.editContactForm.FirstName = resultData.result.firstName;
          this.editContactForm.LastName = resultData.result.lastName;
          this.editContactForm.Email = resultData.result.email;
          this.editContactForm.PhoneNumber = resultData.result.phoneNumber;
        }
      }
    },
      (error: any) => { });
  }

  EditContact(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.editContact(this.editContactForm).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.success) {
            if (resultData != null && resultData.success) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class contactForm {
  ContactId: number = 0;
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  PhoneNumber: string = "";
}