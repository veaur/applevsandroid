// Controlling CSS & Attributes from JS

// document.getElementById("some-id").style accesses CSS rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black"; Changes the border

// document.getElementById("some-image").src = "images/newpic.jpg"; // Changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com"; // will change the hyperlink

// Changing an Image vs Adding A new Image
// To add an Image where there wasn't one before, you need a container for the image in HTML
//containers are empty paragraphs <p>, h1s <h1> or divs <div> elements
// for e.g. In HTML: <div id= "img-container"> dog </div>

//document.getElementById("img-container").innerHTML = "<img src='images/pic.jpg'>"

//Apple VS Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  //Change the 'Android vs Apple' image to android logo
  document.getElementById("logo").src = "images/Android-Logo.jpg";

  //Change the Explore the debate link so that the link says 'android home'
  document.getElementById("the-link").innerHTML = "Android Home";

  //change the 'explore the debate' background
  document.getElementById("the-link").style.background = "#a4c93b";

  //change the explore the debate link
  document.getElementById("the-link").href = "https://www.android.com/&#39";

  //change background bands
  document.getElementById("the-html").style.background = "#a4c93b";

  //change font family
  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";

  //add the class active to android button
  document.getElementById("android").classList.add("redborder");

  //remoce class active from apple button
  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  //changes logo to apple
  document.getElementById("logo").src = "images/Apple-logo.jpg";

  //change debat link so link says 'apple home'
  document.getElementById("the-link").innerHTML = "Apple home";

  //change apple home color
  document.getElementById("the-link").style.background = "#b6bcca";

  //change link to apple link
  document.getElementById("the-link").href = "https://www.apple.com";

  //change body background color
  document.getElementById("the-html").style.background = "#b6bcca";

  //change font family
  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";

  //add redborder to apple button
  document.getElementById("apple").classList.add("redborder");

  //remove
  document.getElementById("android").classList.remove("redborder");
}
