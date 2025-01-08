document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");

    function testFunction() {
      console.log('Test function executed');
    }

    const testBtn = document.getElementById("testBtn");
    testBtn.addEventListener("click", function() {
      console.log("Test button clicked");
      testFunction();
    });
  });
