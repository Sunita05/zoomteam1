import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { Document } from './document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

    constructor(private modalService: NgbModal,private _data:CommonHttpService) { }
    updatedItem: number;
    title = 'Documents';
    closeResult: string;
    selectedDocumentOption: string;
    // name: string;
    msg = 'Are You Sure!';
    // description:string;

    arrDoc: Document[]=[];
    editId:number;
    editName:string;
    editDescription:string;

    item:string;

     id: number;
    organizationId: number;
     name: string;
     description: string;
     isactive: boolean;
     isgeneral:boolean;
     createdby: number;
     createddate: Date;
     modifiedby: number;
     modifieddate: Date;


    ngOnInit() {
      this._data.getDocuments().subscribe(
        (data:Document[])=>{
            this.arrDoc=data;
          console.log(this.arrDoc);
        }
        );
    }

    onSearch(value) {

    console.log(value);
    if (value != '') {
    this.arrDoc = this.arrDoc.filter(x => x.name.startsWith(value));
    }
    this.ngOnInit();
    }

    // Add modal
    openAdd(content, passedTitle) {
    this.selectedDocumentOption = passedTitle;
    this.name = '';
    this.description = '';
    this.modalService.open(content);
    }

    // Edit modal popup
    openEdit(content, passedTitle, i) {
    console.log(content);
    this.selectedDocumentOption = passedTitle;
    // console.log(i);
    this.name = this.arrDoc[i].name;
    this.description = this.arrDoc[i].description;
    // console.log('updating');
    this.updatedItem = i;
    this.modalService.open(content);
    }


    // delete

        onDocDelete(id:number) {
            // console.log(desig);
           this._data.deleteDocument(id).subscribe(
               (data: any)=> {
                   alert('successfully deleted');
                   this.ngOnInit();
               }
               );
            // if (confirm(this.msg) === true) {
            // this.arrDesig.splice(this.arrDesig.indexOf(id), 1);
            // }

            }


    onFormSubmit(f) {
    if (this.selectedDocumentOption == 'Add') {
    // console.log(this.name);
    // this.arrDesig.push();
    // } else {
    // let data = this.updatedItem;
    // console.log(data);
    // alert(this.arrDesig.length);
    // for (let i = 0; i < this.arrDesig.length; i++) {
    // if (i == data) {
    // this.arrDesig[i].Name = this.name;
    // this.arrDesig[i].Description = this.description ;
    // console.log(this.arrDesig);

    // // To initialize the fields with empty data
    // this.name = '';
    // this.description = '';
    // }
    // }
    this._data.addDocumnets(f.value).subscribe((data: any) => {
    //   console.log(f.value);
    //   alert("record added");
      this._data.getDocuments();
    });


    }
    this.modalService.dismissAll();
    }
    }
