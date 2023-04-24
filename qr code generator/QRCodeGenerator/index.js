
const form = document.getElementById("generate-form");
const qr = document.getElementById("goes-in");
const colorPicker = document.getElementById('colorpicker')
const save = document.getElementById('save')


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

//       document.getElementById("qr-output").innerHTML = "";
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
  });
};

const onSave = () => {
  const imgUrl = qr.querySelector("img").src;
  const link = document.createElement("a");
  link.href = imgUrl;
  link.download = "qrcode.jpg";
  // document.body.appendChild(link);
  link.click();
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

form.addEventListener("submit", onGenerate);
save.addEventListener("click", onSave);
