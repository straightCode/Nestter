import React, { Component } from "react";
import {tweets} from "../mocks";
import {Feed} from '../components';



class MainFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      tweets: [],
    }
  }
  componentDidMount(){
    this.setState({
      tweets,
    })
  }
  onReplyClick = (id) => {
    const tweet = this.state.tweets.find(e => e._id == id);
    if(!tweet.statistic.isReplied){
      tweet.statistic.replies++;
      tweet.statistic.isReplied = !tweet.statistic.isReplied;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }else {
      tweet.statistic.replies--;
      tweet.statistic.isReplied = !tweet.statistic.isReplied;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }    
  }
  onRetweetClick = (id) => {
    const tweet = this.state.tweets.find(e => e._id == id);
    if(!tweet.statistic.isRetweeted){
      tweet.statistic.retweets++;
      tweet.statistic.isRetweeted = !tweet.statistic.isRetweeted;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }else {
      tweet.statistic.retweets--;
      tweet.statistic.isRetweeted = !tweet.statistic.isRetweeted;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }    
  }
  onLickeClick = (id) => {
    const tweet = this.state.tweets.find(e => e._id == id);
    if(!tweet.statistic.isLicked){
      tweet.statistic.lickes++;
      tweet.statistic.isLicked = !tweet.statistic.isLicked;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }else {
      tweet.statistic.lickes--;
      tweet.statistic.isLicked = !tweet.statistic.isLicked;
      const tweets = this.state.tweets.map(e => e._id == id ? tweet : e);
      this.setState({tweets});
    }    
  }
  render(){
    return <Feed tweets={this.state.tweets}
      onReply={this.onReplyClick}
      onRetweet={this.onRetweetClick}
      onLicke={this.onLickeClick}/>
  }
}


export default MainFeed;