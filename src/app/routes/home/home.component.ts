import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/interfaces/tweet-interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getAllTweets() {

  }

  postTweet() {
    this.arrayTweets.push({ id: this.arrayTweets.length + 1, comment: this.tweetText, img: './../../../assets/user.jpg', date: 'asdfasdf', name: 'Maximiliano', user: '@maxUser' })

    console.log(this.arrayTweets);

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

  decreaseProgressType(event) {

    if (event.keyCode == 8) {

      this.typeCount = this.typeCount - 1;

      this.progressBarCount = this.progressBarCount - (100 / 130);

    } else if (event.keyCode != 8 && this.typeCount < 130) {
      
      this.typeCount = this.typeCount + 1;

      this.progressBarCount = this.progressBarCount + (100 / 130);
    }

    if (!this.tweetText) {
      this.progressBarCount = 0;
      this.typeCount = 0;
    }

  }


}
