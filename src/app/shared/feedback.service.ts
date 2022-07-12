import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbacklist: AngularFireList<any>;
  feedback: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  addFeedback(feedbackaf: Feedback){
    this.feedbacklist.push({
      fullname: feedbackaf.fullname,
      email: feedbackaf.email,
      star: feedbackaf.star,
      review: feedbackaf.review,
    });
  }
  getDbfb(){
    return this.db;
  }
  
  getFeedback(id: string){
    this.feedback = this.db.object('feedback-list/' + id);
    return this.feedback;
  }

  getFeedbackList(){
    this.feedbacklist = this.db.list('feedback-list');
    return this.feedbacklist;
  }

  updateFeedback(feedbackaf: Feedback){
    this.feedback.update({
      fullname: feedbackaf.fullname,
      email: feedbackaf.email,
      star: feedbackaf.star,
      review: feedbackaf.review,
    })
  }

  deleteFeedback(id: string){
    this.feedback = this.db.object('feedback-list/' + id);
    this.feedback.remove;
  }

}