import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild(NgForm) contactForm;
  contactData: any;
  showMessageInfo: boolean;
  processing: boolean;
  buttonToSendFeedback: string;
  options: Array<any> = [
    {
      "value": "Telefono or Email"
    },{
      "value": "Telefono"
    },{
      "value": "Email"
    }
  ]
  constructor() { }

  ngOnInit() {
    this.contactData = {
      firstName: "",
      email: "",
      contactOption: null
    };
    this.showMessageInfo = false;
    this.processing = false;
    this.buttonToSendFeedback = "Send Feedback";
  }

  onSubmit() {
    this.processing = true;
    this.buttonToSendFeedback = "Wait...";
    setTimeout(() => {
      this.showMessageInfo = true;
      this.contactForm.reset();
      this.contactData = {
        firstName: "",
        email: "",
        contactOption: null
      };
      this.buttonToSendFeedback = "Send Feedback";
      this.processing = false;
    }, 2000)

    
  }

}
