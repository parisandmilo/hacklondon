Parse.initialize("9qiSnFq1twgMpo2YcGr1U4kfkyC4mDru6uqK704n", "aT59N4qjCqrE3zh5IfF8bUEpiwEFDRSDnvpQJLWM");  
 $('#myForm').submit(function() {
    // get all the inputs into an array.
     alert("sent2");
    var $inputs = $('#myForm :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
     console.log(values);
    var Message = Parse.Object.extend("Message");
    var newMessage = new Message();
    newMessage.set("name",values.name);
    newMessage.set("email",values.email);
    newMessage.set("message",values.message);

    newMessage.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});   
 });
