import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/interfaces/tweet-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  tweetText: string;

  arrayTweets: Tweet[] = [];

  newTweet: Tweet;

  typeCount = 0;

  progressBarCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getAllTweets() {

  }

  postTweet() {
    this.arrayTweets.push({ id: this.arrayTweets.length + 1, comment: this.tweetText, img: './../../../assets/user.jpg', name: 'Maximiliano', user: '@maxUser' })

    this.tweetText = '';
  }


  deleteTweet(objTweet) {
    this.arrayTweets.forEach((element, index) => {
      if (element == objTweet) this.arrayTweets.splice(index, 1);
    });
  }

  increaseProgressType() {
    this.typeCount = this.typeCount + 1;

    this.progressBarCount = this.progressBarCount + (100 / 130);
    console.log(this.progressBarCount)
  }

  typeProgress(event) {

    if (event.keyCode == 8) {

      this.typeCount = this.typeCount - 1;

      this.progressBarCount = this.progressBarCount - (100 / 130);

    } else if (event.keyCode != 8 && event.keyCode != 17 && this.typeCount < 130) {
      
      this.typeCount = this.typeCount + 1;

      this.progressBarCount = this.progressBarCount + (100 / 130);
    }

    if (!this.tweetText) {

      this.progressBarCount = 0;

      this.typeCount = 0;
    }

  }

  onPaste(event: ClipboardEvent) {  
      
    let textPaste = event.clipboardData.getData('text');

      if((this.typeCount + textPaste.length) < 130){

        this.typeCount += textPaste.length;

        this.progressBarCount += textPaste.length * (100/130);

      }else{
        let rest = (130-this.typeCount);

        this.typeCount += rest;

        this.progressBarCount += rest * (100/130)
      }
   
  }

}
