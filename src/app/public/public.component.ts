import { AfterViewInit, Component, ElementRef } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  title = 'HelmDect'

  routerEvents: any
  url: any
  dropDown: any = 'noneDisplay'
  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.url = event.url
        }
      }
    )
  }

  isActive(url:any){
    return url == this.url ? 'active':''
  }

  show(){
    return this.dropDown = this.dropDown == 'noneDisplay' ? 'blockDisplay':'noneDisplay'
  }
}
