import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {

  }
  title = 'HelmDect'
  aboutUp = 'Introducing HelmDect, the cutting-edge web-based helmet detection solution for Land Transportation Office (LTO) compliance. This ground-breaking technology makes use of cutting-edge Convolutional Neural Network (CNN) algorithms to guarantee precise and quick helmet recognition among motorcyclists. HelmDect provides a practical and efficient approach to respect road safety regulations with its user-friendly interface and seamless integration. Utilize HelmDect right away to support our efforts to encourage safe riding habits.'
  aboutUs = 'A technology-driven effort called HelmDect aims to improve traffic safety and guarantee adherence to Land Transportation Office (LTO) rules. Our team of experts combines a thorough knowledge of machine learning with a dedication to developing cutting-edge solutions. With the aid of cutting-edge Convolutional Neural Network (CNN) techniques, we are passionate about reinventing helmet detection for motorcycle riders. HelmDect works to have a long-lasting impact on driving safety procedures by putting a focus on accuracy and user-friendly experiences. Join us in our effort to promote responsible riding and make the transportation system safer and more law abiding.'
}
