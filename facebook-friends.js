/*
 * QUIZ REQUIREMENTS
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

let facebookProfile = {
  name: "Keith",
  friends: 2,
  messages: ['message1', 'message2', 'message3'],
  postMessage: function postMessage(message) {
    facebookProfile.messages.push(message);
    console.log(facebookProfile.messages);
  },
  deleteMessage: function deleteMessage(index) {
    facebookProfile.messages.splice(index, 1);
    console.log(facebookProfile.messages);
  },
  addFriend: function addFriend() {
    facebookProfile.friends += 1;
    console.log(facebookProfile.friends);
  },
  removeFriend: function removeFriend() {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
      console.log(facebookProfile.friends);
    }
  }
};

facebookProfile.deleteMessage(1);