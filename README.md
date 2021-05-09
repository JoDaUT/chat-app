# Angular, Node.JS chat aplication 👨‍💻👩‍💻
This is a web chat application with private messages, real-time comunication, calls, videocalls, message notifications and emojies.

## Technologies ⚙️

* Angular
* Node.JS
* Express
* Socket.io
* MongoDB


## What you can do?

### Authenticate with your Google account 🔐
Just click the Google Authentication option and enter your email and password.
![login](https://user-images.githubusercontent.com/47344349/117557110-f88d6e00-b02c-11eb-9983-dc91da4151cd.png)
![google auth](https://user-images.githubusercontent.com/47344349/117557115-ffb47c00-b02c-11eb-81ba-0784c949e5af.png)

### Chat with your friends 👩🧒👸🧔
This section has a header with the user account name, email and photo. In the left, a sidebar with the active contacts. When a contact disconnects it disappears in the others' sidebars. In the right section next to the sidebar there is the chat section with the contact selected information and the saved messages. In the bottom, the textbox to write new messages, it allows emojies. Send files is not implemented.

<br>

![sending message](https://user-images.githubusercontent.com/47344349/117558272-11038580-b039-11eb-8123-ccc448d2a63e.png)


### Your friends will be notified when you send them a message
When you send a message to any of the active contacts, they going to receive a notification in the sidebar section. This notification will disappear when you click the contact.

![notifications](https://user-images.githubusercontent.com/47344349/117557452-3a6be380-b030-11eb-81c8-9dfe576ac85e.png)

### Make some calls and video calls 📞🤙
You can call your friends when they are active. Make a videocall or an audio call by clicking any of the two options available in the contact selected section.

![call options](https://user-images.githubusercontent.com/47344349/117557487-730bbd00-b030-11eb-9168-f082fe28c3c0.png)

The other will receive a call notification with the caller information. 
![videocall notification](https://user-images.githubusercontent.com/47344349/117558275-1c56b100-b039-11eb-9d4d-c60bcfee1a20.png)


In your screen you have to wait the contact answer.
![calling](https://user-images.githubusercontent.com/47344349/117558277-24165580-b039-11eb-8293-448bf48ab89d.png)

The call can be rejected if the other don't want to answer and you are going to receive a rejected call notification.

If your friend accept the call, in both screens the audio and/or video stream going to appear. Now, both can start to talk.
![videocall](https://user-images.githubusercontent.com/47344349/117558282-34c6cb80-b039-11eb-8d52-a90a179e4a7e.png)

The video only call is the same but without the video stream. Just the contact Google account photo of your friend.


