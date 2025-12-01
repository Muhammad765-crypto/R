


let buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let input = btn.previousElementSibling; // o'sha tugmaning yonidagi input
    let value = input.value.trim();

    if (value === "") {
      alert("Iltimos, javob yozing!");
      return;
    }

    fetch("https://692c2ab4c829d464006eb7b4.mockapi.io/Contactt/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Jo'natildi ✅");
        input.value = "";
      })
      .catch((error) => {
        alert("Xatolik ❌");
      });
  });
});
