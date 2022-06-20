import { Injectable } from '@angular/core';
import { Tweet } from '../interfaces/tweet-interface';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  constructor() { }

  getTweetList(){
   return JSON.parse(localStorage.getItem('tweet-list')) as Tweet[];
  }

  postTweetList(tweetList){
    localStorage.setItem('tweet-list', JSON.stringify(tweetList));
  }
}
