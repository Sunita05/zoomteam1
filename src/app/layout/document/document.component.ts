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
      title = 'Document';
      closeResult: string;
      selectedDocumentOption: string;
      name: string;
      msg = 'Are You Sure!';
      description:string;

      arrDoc: Document[]=[];
      editId:number;
      editName:string;
      editDescription:string;

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
      onDocDelete(desig) {
      console.log(desig);
      if (confirm(this.msg) === true) {
      this.arrDoc.splice(this.arrDoc.indexOf(desig), 1);
      }

      }

      onFormSubmit(f) {
      if (this.selectedDocumentOption == 'Add') {
      // console.log(this.name);
      // this.arrDesig.push();
      // }
      this._data.addDocumnets (f.value).subscribe((data: any) => {
        console.log(f.value);
        alert("record added");
      });


      }
      else {
        let data = this.updatedItem;
        console.log(data);
        alert(this.arrDoc.length);
        for (let i = 0; i < this.arrDoc.length; i++) {
        if (i == data) {
        this.arrDoc[i].name = this.name;
        this.arrDoc[i].description = this.description ;
        console.log(this.arrDoc);

        // To initialize the fields with empty data
        this.name = '';
        this.description = '';
        }
        }
      this.modalService.dismissAll();
      }
      this._data.editDesg(f.value).subscribe((data: any) => {
        console.log(f.value);
        alert("record added");
      });
  }
}
