/* eslint-disable max-len */

import React from 'react';

import Message from './Message/Message.js';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            messages: nextProps.messages,
            currentUser: nextProps.currentUser,
            onMessageTitleClick: nextProps.onMessageTitleClick,
            saveElementForScroll: nextProps.saveElementForScroll
        };
    }

    render() {
        return (
            <ol className='chat'>
                {this.state.messages.map((message, idx) => {
                    return (
                        <Message
                            key={idx}
                            currentUser={this.state.currentUser}
                            text={message.text}
                            author={message.author}
                            date={message.date}
                            metadata={message.metadata}
                            onMessageTitleClick={this.state.onMessageTitleClick}
                            saveElementForScroll={this.state.saveElementForScroll}
                        />
                    );
                }
                )}
                <style>
                    {`
                  .chat-container {
                  margin-bottom: 100px;
                  float:right;
                  width: 50%;
                  }
                  .chat {
                      margin-top: 60px;
                  }
                  .chat li {
                      padding: 7px;
                      overflow: hidden;
                      display: flex;
                  }
                  .chat .avatar {
                      width: 40px;
                      height: 40px;
                      position: relative;
                      display: block;
                      z-index: 2;
                      border-radius: 100%;
                      -webkit-border-radius: 100%;
                      -moz-border-radius: 100%;
                      -ms-border-radius: 100%;
                      background-color: rgba(255,255,255,0.9);
                  }
                  .chat .avatar img {
                      width: 40px;
                      height: 40px;
                      border-radius: 100%;
                      -webkit-border-radius: 100%;
                      -moz-border-radius: 100%;
                      -ms-border-radius: 100%;
                      background-color: rgba(255,255,255,0.9);
                      -webkit-touch-callout: none;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                  }
                  .chat .day {
                      position: relative;
                      display: block;
                      text-align: center;
                      color: #c0c0c0;
                      height: 20px;
                      text-shadow: 7px 0px 0px #e5e5e5, 6px 0px 0px #e5e5e5, 5px 0px 0px #e5e5e5, 4px 0px 0px #e5e5e5, 3px 0px 0px #e5e5e5, 2px 0px 0px #e5e5e5, 1px 0px 0px #e5e5e5, 1px 0px 0px #e5e5e5, 0px 0px 0px #e5e5e5, -1px 0px 0px #e5e5e5, -2px 0px 0px #e5e5e5, -3px 0px 0px #e5e5e5, -4px 0px 0px #e5e5e5, -5px 0px 0px #e5e5e5, -6px 0px 0px #e5e5e5, -7px 0px 0px #e5e5e5;
                      box-shadow: inset 20px 0px 0px #e5e5e5, inset -20px 0px 0px #e5e5e5, inset 0px -2px 0px #d7d7d7;
                      line-height: 38px;
                      margin-top: 5px;
                      margin-bottom: 20px;
                      cursor: default;
                      -webkit-touch-callout: none;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                  }
                `}</style>
            </ol>
        );
    }
}
