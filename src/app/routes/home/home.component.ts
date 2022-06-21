import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/interfaces/tweet-interface';
import { TweetServiceService } from 'src/app/shared/service/tweet-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  tweetText: string;

  arrayTweets: Tweet[] = [];

  newTweet: Tweet;

  progressBarCount = 0;

  textPasteSize = 0;

  constructor(private tweetService : TweetServiceService) { }

  ngOnInit(): void {

    this.getAllTweets();

  }

  getAllTweets() {

    if(this.tweetService.getTweetList()){
    
      this.arrayTweets = this.tweetService.getTweetList();
    
    }
  }

  postTweet() {

    this.arrayTweets?.push({ id: this.arrayTweets.length + 1, comment: this.tweetText, img: './../../../assets/user.jpg', name: 'Maximiliano', user: '@maxUser' })
 
    this.tweetService.postTweetList(this.arrayTweets);

    this.tweetText = '';

    this.progressBarCount = 0;
  }


  deleteTweet(objTweet) {
    this.arrayTweets.forEach((element, index) => {

      if (element == objTweet) this.arrayTweets.splice(index, 1);

    });

    this.tweetService.postTweetList(this.arrayTweets);
  }

  typeProgress(event) {

    if (event.keyCode == 8) {

      this.progressBarCount = this.progressBarCount - (100 / 130);

    } else if (event.keyCode != 8 && !event.ctrlKey && this.tweetText?.length < 130) {

      this.progressBarCount = this.progressBarCount + (100 / 130);
      
    }
  }

  onPaste(event: ClipboardEvent) {   

      if(this.tweetText?.length <= 130){

        this.progressBarCount += event.clipboardData.getData('text').length * (100/130);

      }else{
        event.preventDefault();
      }
   
  }

  clearProgress(){
    
    if(this.tweetText?.length==0){

      this.progressBarCount = 0;

    }
  }

}
