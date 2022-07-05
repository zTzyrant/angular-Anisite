import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { HttpClient } from "@angular/common/http";
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section" style="height: 100vh;">
      <div class="container">
        <div class="card has-text-centered" *ngIf="products[0]">
          <h2><strong>Username:</strong> {{products[0].username}}</h2>
          <h2><strong>Password:</strong> {{products[0].password}}</h2>
          <h2><strong>Fullname:</strong> {{products[0].fullname}}</h2>
          <h2><strong>Email:</strong> {{products[0].email}}</h2>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .avaCustm{
      height: 460px;
    }
  `]
})
export class UserSingleComponent implements OnInit {
  products: any = [];decryptedMessage: string; decryp2tedMessage: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {

    this.httpClient.get("https://apianisite.site/apianisite.php?function=get_data&api=9bc65c2abec141778ffaa729489f3e87").subscribe(user =>{
      this.products = user;
    });
    console.log(this.userService.apiUrl);
  }

}