import React from "react";

function Chat() {
  return  <div className='disription'>
        <div className='discription_1'>
            <p className='discription_1_logo'>G\G FITNESS</p>
            <h2 className='discription_1_content'>Start a
                chat.</h2>
        </div>
        <div className="chat_container">
            <div className="text chat_container_1">
                <h2>📞 Text or call</h2>
                <p>The fastest way to get in touch</p>
                <button className="chat_container_button">What's Up</button>
            </div>
            <div className="text chat_container_2">
                <h2>📧 Email</h2>
                <p>Feel free to send an email</p>
                <button className="chat_container_button">Email me</button>
            </div>
            <div className="text chat_container_3">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg>
                    Instagram</h2>
                <p>Drop me a direct message</p>
                <button className="chat_container_button">Instagram</button>
            </div>
        </div>
    </div>
}

export default Chat;