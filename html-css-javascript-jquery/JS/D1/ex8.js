const para = `   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in vestibulum nisi. Donec dapibus ornare sem at rutrum. et Mauris ac felis volutpat, posuere enim venenatis, pulvinar eros. Fusce luctus dui a tellus luctus, non accumsan ex scelerisque. Nullam scelerisque fermentum pretium. Quisque porttitor massa turpis, vel pellentesque nibh egestas sit amet. Suspendisse nec diam quis turpis dapibus auctor. Praesent auctor aliquam risus, vitae ultrices tellus consectetur eu. Praesent posuere gravida congue. Proin eu ligula neque. Integer porta ipsum et libero laoreet auctor. Proin scelerisque nec magna vel dictum. Morbi aliquam consectetur posuere. Ut tempus eros vulputate risus bibendum accumsan. Aliquam laoreet libero eget gravida vestibulum. Quisque gravida diam consequat nibh lobortis, ac varius mi scelerisque.

Vivamus a vestibulum justo, a auctor quam. Phasellus lacinia tellus in viverra lobortis. Sed ultrices, mauris eget ultricies suscipit, quam et lorem interdum justo, eu facilisis velit quam ac felis. Phasellus mollis varius lacus, suscipit dignissim libero vestibulum eget. Curabitur eu ullamcorper risus. Mauris pulvinar efficitur purus, ut bibendum erat pharetra non. Mauris libero sem, laoreet in mauris at, bibendum rutrum erat. Mauris eleifend et metus et egestas. Cras sollicitudin quam sed augue euismod porta. Donec vel magna ex. Nulla pulvinar metus quis placerat volutpat. Sed tincidunt, dolor a porta suscipit, lacus ante faucibus leo, ac tristique nulla tellus in mi. Pellentesque vitae diam hendrerit, fermentum sapien a, vehicula velit.

Aenean nec elementum dolor. Ut congue aliquam lorem vel laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sapien tortor, pretium ac diam ut, pulvinar maximus turpis. Suspendisse placerat ligula sed metus iaculis consectetur ac ut ex. Proin arcu ligula, ornare eget mauris eu, hendrerit ullamcorper justo. In sed interdum mauris.`;

const printWordCount = (para) => {
  let sum = 0;
  for (let i = 1; i < 10; i++) {
    if (para.charAt(i) === " " || para.charAt(i) === "\n") {
      console.log(console.log("i: ",i))
      if (para.charAt(i - 1) !== "\n") {
        sum += 1;
      }
    }
  }
  console.log(`nombre de mots : ${sum}`);
};


const printEtCount = (para) => {
  let sum = 0;
  for (let i = 4; i < para.length; i++) {
    if (
      (para.charAt(i - 3) === " " || para.charAt(i - 3) === "\n") &&
      para.charAt(i - 2) === "e" &&
      para.charAt(i - 1) === "t" &&
      (para.charAt(i) === " " || para.charAt(i) === "\n")
    ) {
      sum += 1;
    }
  }
  console.log(`nombre de 'et' : ${sum}`);
};


printWordCount(para);
printEtCount(para);

let sum = 0
for (let i = 0; i < para.length - 3; i++) {
    if(para.substring(i,i+4)===' et '){
        sum+=1
    }
}
console.log(sum)
