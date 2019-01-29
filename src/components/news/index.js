import React, { Component } from 'react';
import './news.css';
import _ from 'lodash';
import { Modal, Container } from 'semantic-ui-react';
import Moment from 'moment';

const PreviewNews = ({ previewText, currentTime }) => (
  <div>
    <span className='headline'>Breaking News! {currentTime}</span>
    {previewText}
  </div>
);

class News extends Component {
    previewText = (newsText) => {
      const previewText = newsText.length > 250 ? `${newsText.substring(0, 250)}....` : newsText;
      return <div>{previewText}</div>;
    }

    render() {
      const { news } = this.props;
      const currentTime = new Moment().format('HH:mm');
      const newsText = news ? _.get(news, 'data', '') : {};
      const previewText = news ? this.previewText(newsText) : {};
      return (
        <Modal trigger={<Container><PreviewNews previewText={previewText} currentTime={currentTime}/></Container>}>
          <Modal.Header>Breaking News</Modal.Header>
          <Modal.Content>
            <div>{newsText}</div>
          </Modal.Content>
        </Modal>
      );
    }
}

export default News;
