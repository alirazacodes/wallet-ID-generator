document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register");
  const walletIdElement = document.getElementById("walletId");
  const copyButton = document.getElementById("copyButton");

  const hexNumber = "0x2bf2FE4Ec99F6AF6d84a26222B65E16214F69596";
  const decNumber = BigInt(hexNumber);

  class Xorshift {
    constructor(seed = 1) {
      this._seed = seed;
    }

    random() {
      this._seed ^= this._seed << 13;
      this._seed ^= this._seed >> 17;
      this._seed ^= this._seed << 5;
      return Number((this._seed >>> 0) / 2 ** 32);
    }
  }

  let rng = new Xorshift(decNumber);

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

    walletIdElement.textContent = walletId;
  });

  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(walletIdElement.textContent).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  });

  function generateWalletId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 24; i++) {
      result += characters.charAt(Math.floor(rng.random() * charactersLength));
    }
    return result;
  }
});
