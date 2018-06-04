const fileConvertor = value => {
  var reader = new FileReader();
  reader.readAsDataURL(value);
  let img =""
  reader.onload = () => {
    console.log(reader.result);
    img = reader.result
    return img
  };
  console.log(img)
  return img
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };

}
 

export default fileConvertor;