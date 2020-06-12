import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public arrow = 'https://i.postimg.cc/X7yyGCxH/We-Chat9ea5b85a828b7d30f4882f976cc823a5.png';
  change(){
    if(this.arrow=='https://i.postimg.cc/X7yyGCxH/We-Chat9ea5b85a828b7d30f4882f976cc823a5.png'){
      this.arrow='https://i.postimg.cc/L6hGzHZ0/We-Chat3f692f1f143e580c85280ba352095fbe.png';
    }else{
      this.arrow='https://i.postimg.cc/X7yyGCxH/We-Chat9ea5b85a828b7d30f4882f976cc823a5.png';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
