import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qrgen',
  templateUrl: './qrgen.html',
  styles: [
  ]
})
export class QrgenComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public qrCodeDownloadLink: SafeUrl = "";
  constructor() { 
    this.myAngularxQrCode = 'Generate Your Own QR';
  }

  ngOnInit(): void {
    
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  someqr(){
    const txt = document.getElementById('txt') as HTMLInputElement | null;
    const ninja = document.getElementById('hidden');
    console.log(txt.value);
    this.myAngularxQrCode = txt.value;
    Swal.fire('Success', 'Successful Generate QR Code', 'success')
    if(this.myAngularxQrCode != 'Generate Your Own QR'){
      ninja.setAttribute("style", "display: inline;margin-left: auto;width: 400px;margin-right: auto;")
      
    }
  }
}
