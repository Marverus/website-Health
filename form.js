function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let size = document.forms["myForm"]["size"].value;
    let calorie = document.forms["myForm"]["calorie"].value;
    let link = document.forms["myForm"]["link"].value;
    console.log(link.startsWith("https"));
    if (x == "") {
      alert("Nama harus diisi");
      return false;
    }
    if (size < 50) {
        alert("Size harus lebih dari 50(g)");
        return false;
      }
      if (calorie < 0||calorie>400) {
        alert("calorie tidak sesuai");
        return false;
      }
      if (!link.startsWith("https")) {
        alert("link harus diisi dan dimulai dengan link https");
        return false;
      }
  }