
const form = document.getElementById("generate-form");
const qr = document.getElementById("goes-in");
const colorPicker = document.getElementById('colorpicker')
const save = document.getElementById('save')
const output = document.getElementById("qr-output")


const onGenerate = (e) => {
  e.preventDefault();

  const url = document.getElementById("url").value;
  const urlMain = document.getElementById("url")
  const size = document.getElementById("size").value;

  urlMain.addEventListener('click', ()=>{
    output.innerHTML= '';
  })

  if (url === "") {
    alert("please enter url");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();

      output.innerHTML = '';
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


save.addEventListener('click', () => {
  const canvas = document.querySelector('#qr-output canvas');
  const img = canvas.toDataURL('image/png');
  downloadImage(img, 'qr-code.png');
});

const downloadImage = (data, filename = 'qr-code.png') => {
  const a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};


const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

form.addEventListener("submit", onGenerate);

