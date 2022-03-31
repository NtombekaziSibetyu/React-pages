import React, { Component } from "react";

class ChatDoc1 extends Component {
  render() {
    return (
      <div>
        <div className="chat-header">
          {/* <button className="backBtn">
          <i class="fa fa-chevron-circle-right" className="arrow"></i>
        </button> */}
          <i class="fas fa-user fa-3x"></i>
          <h1>Dr Name Surname</h1>
          <p>Online</p>
          <button className="headerBtn">
            <i class="far fa-calendar-alt"></i>
          </button>
          <button className="headerBtn">
            <i class="fas fa-phone"></i>
          </button>
          <button className="headerBtn">
            <i class="fas fa-video"></i>
          </button>
        </div>
        <hr class="solid"></hr>
        <div className="chat-body">
          <div className="incoming">{""}</div>
          <div className="outgoing">{""}</div>
        </div>
        <hr class="solid"></hr>
        <div className="reply-sec">
          <textarea className="reply-box"></textarea>
          <button className="reply-btn">
            <i class="fas fa-paper-plane fa-2x"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ChatDoc1;
