import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import './news.css';

class News extends Component {
    createNewsPanel = (news) => {
      const text = _.get(news, 'data', '');
      const previewText = text.length > 250 ? `${text.substring(0, 250)}....` : text;
      return <div>{previewText}</div>;
    }

    render() {
      const { news } = this.props;
      const currentTime = new Moment().format('HH:mm');
      const newsPanel = this.createNewsPanel(news);
      return (
        <div>
          <span className='headline'>Breaking News! {currentTime}</span>
          {newsPanel}
        </div>
      );
    }
}

export default News;
