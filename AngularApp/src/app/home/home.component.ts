import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}
const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  contactList: any = [];
  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllContact();
  }
  async getAllContact() {
    this.httpProvider.getAllContact().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.contactList = resultData.result;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error instanceof ErrorEvent) {
            console.log('Error de red: ', error.message);
          } else {
            console.log('Error del servidor: ', error.status, error.statusText);
          }
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.contactList = [];
            }
          }
        }
      });
  }

  AddContact() {
    this.router.navigate(['AddContact']);
  }

  deleteContactConfirmation(contact: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result : any) => {
        this.deleteContact(contact);
      },
        (reason: any) => {});
  }

  deleteContact(contact: any) {
    this.httpProvider.deleteContactById(contact.contactId).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null && resultData.success) {
          this.toastr.success(resultData.message);
          this.getAllContact();
        }
      }
    },
    (error : any) => {});
  }
}