/* eslint-disable */
import React, { Component } from 'react';

export default function Chat({ messages }) {
    return <div className='chat-container'>
        <ol className='chat'>
            {messages.map(elem => {
                return (<li className={elem.side}>
                    <div className='avatar'>
                        <img src={elem.avatar} draggable='false' />
                    </div>
                    <div className='msg'>
                        <p>{elem.message}</p>
                        <time>{elem.time}</time>
                    </div>
                </li>);
            })}
        </ol>
        <div className='textarea-decorator'>
            <input id='' className='textarea' type='text' placeholder='Type here!' /></div>
        <style jsx>{`
                @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
                .chat-container
                {
                    margin-bottom: 100px;
                    float:right;
                    width: 50%;
                }
                .chat
                {
                    margin-top: 60px;
                }
                .chat li
                {
                    padding: 7px;
                    overflow: hidden;
                    display: flex;
                }
                .chat .avatar
                {
                    width: 40px;
                    height: 40px;
                    margin: 10px;
                    position: relative;
                    display: block;
                    z-index: 2;
                    border-radius: 100%;
                    -webkit-border-radius: 100%;
                    -moz-border-radius: 100%;
                    -ms-border-radius: 100%;
                    background-color: rgba(255,255,255,0.9);
                }
                .chat .avatar img
                {
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
                .chat .day
                {
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
                .other .msg
                {
                    order: 1;
                    border-top-left-radius: 0px;
                    box-shadow: -1px 2px 0px #D4D4D4;
                }
                .other:before
                {
                    content: "";
                    position: relative;
                    top: 0px;
                    right: 0px;
                    left: 40px;
                    width: 0px;
                    height: 0px;
                    border: 5px solid #fff;
                    border-left-color: transparent;
                    border-bottom-color: transparent;
                }
                .self
                {
                    justify-content: flex-end;
                    align-items: flex-end;
                }
                .self .msg
                {
                    order: 1;
                    border-bottom-right-radius: 0px;
                    box-shadow: 1px 2px 0px #D4D4D4;
                }
                .self .avatar
                {
                    order: 2;
                }
                .self .avatar:after
                {
                    content: "";
                    position: relative;
                    display: inline-block;
                    bottom: 19px;
                    right: 0px;
                    width: 0px;
                    height: 0px;
                    // border: 5px solid #fff;
                    border-right-color: transparent;
                    border-top-color: transparent;
                    box-shadow: 0px 2px 0px #D4D4D4;
                }
                .msg
                {
                    background: white;
                    min-width: 50px;
                    padding: 10px;
                    border-radius: 2px;
                    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
                }
                .msg p
                {
                    font-size: 0.8rem;
                    margin: 0 0 0.2rem 0;
                    color: #777;
                }
                .msg img
                {
                    position: relative;
                    display: block;
                    width: 450px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 3px #eee;
                    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);
                    cursor: default;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }
                @media screen and (max-width: 800px)
                {
                    .msg img {
                        width: 300px;
                    }
                }
                @media screen and (max-width: 550px)
                {
                    .msg img {
                        width: 200px;
                    }
                }
                .msg time
                {
                    font-size: 0.7rem;
                    color: #ccc;
                    margin-top: 3px;
                    float: right;
                    cursor: default;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }
                .msg time:before
                {
                    content:"\f017";
                    color: #ddd;
                    font-family: FontAwesome, serif;
                    display: inline-block;
                    margin-right: 4px;
                }
                input.textarea
                {
                    position: fixed;
                    bottom: 0px;
                    left: 53.6%;
                    width: 40.5%;
                    height: 16%;
                    z-index: 99;
                    background: white;
                    outline: none;
                    padding-left: 5px;
                    padding-right: 55px;
                    color: #666;
                    font-weight: 400;
                    resize: none;
                    overflow-y: scroll;
                    border: solid 5px lightsalmon;
                }
                a
                {
                    color: rgba(82,179,217,0.9);
                }
                `}</style>
    </div>;
}
