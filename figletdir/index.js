const figlet=require("figlet");




async function doStuff() {
  const text = await figlet.text("CODE WITH DEV!!");
  console.log(text);
}

doStuff();




// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });