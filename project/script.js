document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register");
  const walletIdElement = document.getElementById("walletId");
  const copyButton = document.getElementById("copyButton");
  const messageElement = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const walletId = generateWalletId();

    const userData = {
      name,
      email,
      walletId,
    };

    localStorage.setItem(email, JSON.stringify(userData));

    messageElement.textContent = `Registered successfully! Your unique Wallet ID is displayed below. Please copy it for future use.`;
    animateWalletId(walletId, walletIdElement);
  });

  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(walletIdElement.textContent).then(
      function () {
        console.log("Copying to clipboard was successful!");
        messageElement.textContent = `Wallet ID copied to clipboard!`;
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  });

  function generateWalletId() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 24; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return "ID-" + result;
  }

  function animateWalletId(walletId, walletIdElement) {
    walletIdElement.textContent = ""; // Clear previous ID

    let i = 0;
    const intervalId = setInterval(function () {
      if (i < walletId.length) {
        const span = document.createElement("span");
        span.textContent = walletId[i];
        span.className = "wallet-id-char";
        walletIdElement.appendChild(span);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Change this value to adjust speed
  }
});
