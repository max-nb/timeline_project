import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/interfaces/tweet-interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {  

  tweetText:string;

  arrayTweets: Tweet[]=[];

  newTweet: Tweet;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getAllTweets(){

  }

  postTweet(){
    this.arrayTweets.push({id:this.arrayTweets.length+1, comment:this.tweetText, img:'asdfasdf', date:'asdfasdf'})

    console.log(this.arrayTweets);

    this.tweetText = '';  
  }
  

  deleteTweet(){}

}
