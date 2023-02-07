const form = document.getElementById("generate-form");
const qr = document.getElementById("goes-in");
const colorPicker = document.getElementById('colorpicker')

const onGenerate = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  if (url === "") {
    alert("please enter url");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      generateQRCode(url, size);
    }, 1000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qr-output", {
    text: url,
    width: size,
    height: size,
    colorDark: colorPicker.value,
    // colorLight: "#ffffff",
  });
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

form.addEventListener("submit", onGenerate);
