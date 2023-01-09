
let cryptoData = [];
const table = document.getElementById("cryptoTable");
// {
// "symbol": "btc",
// "name": "Bitcoin",
// "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
// "current_price": 17309.82,
// "atl_change_percentage": 25432.23511,
//"market_cap": 333401332274,
// total_volume: 22360968722;
//}
// const renderCryptoColumn = (crypto,cryptoRow) => {
//     // We have to create 6 columns and add data inside of it

//     const td = document.createElement('td');
//     const img = document.createElement('img');
//     const span = document.createElement('span');
//     img.src = crypto.image;
//     img.classList.add('cryptoImage')
//     span.textContent = crypto.name;

//     td.appendChild(img);
//     td.appendChild(span);

//     cryptoRow.appendChild(td);

//     const symbolTd =  document.createElement('td');
//     const symbolSpan = document.createElement('span');
//     symbolSpan.textContent = crypto.symbol;
//     symbolSpan.classList.add("capitlaise");

//     symbolTd.appendChild(symbolSpan);
//     cryptoRow.appendChild(symbolTd);

//     const priceTd = document.createElement("td");
//     const priceSpan = document.createElement("span");
//     priceSpan.textContent = '$' + crypto.current_price.toFixed(2);
//     priceSpan.classList.add("capitlaise");

//     priceTd.appendChild(priceSpan);
//     cryptoRow.appendChild(priceTd);

//     const volumeTd = document.createElement("td");
//     const volumeSpan = document.createElement("span");
//     volumeSpan.textContent = crypto.total_volume;
//     volumeSpan.classList.add("capitlaise");

//     volumeTd.appendChild(volumeSpan);
//     cryptoRow.appendChild(volumeTd);

//      const perTd = document.createElement("td");
//      const perSpan = document.createElement("span");
//      perSpan.textContent = crypto.atl_change_percentage.toFixed(2) + '%';

//      if(crypto.atl_change_percentage > 0 ){
//         perSpan.classList.add('green');
//      }
//      else {
//          perSpan.classList.add('red');
//      }

//      perTd.appendChild(perSpan);
//      cryptoRow.appendChild(perTd);

//      const mCpTd = document.createElement("td");
//      const mCpspan = document.createElement("span");
//      mCpspan.textContent = 'Mkt Cap: $' + crypto.market_cap;

//      mCpTd.appendChild(mCpspan);
//      cryptoRow.appendChild(mCpTd);
// }

const renderCrptoColumn = (
  { data, isImage, className, prefix = '', suffix = '' },
  cryptoRow
) => {
  const td = document.createElement("td");

  if (isImage) {
    const img = document.createElement("img");
    img.src = data;
    td.appendChild(img);
    if (className) {
      img.classList.add(className);
    }

    cryptoRow.appendChild(td);
    return;
  } else {
    const span = document.createElement("span");
    span.textContent = prefix + data + suffix;
    if (className) {
      span.classList.add(className);
    }
    console.log('span',span,cryptoRow,data,isImage,className,prefix,suffix);
    td.appendChild(span);
    cryptoRow.appendChild(td);
  }
};
const renderCrypto = (crypto) => {
    // Create a row 

    const cryptoRow = document.createElement('tr');
   // renderCryptoColumn(crypto,cryptoRow);

   const columnsData = [
     {
       data: crypto.image,
       className: "cryptoImage",
       isImage: true,
     },
     {
       data: crypto.name,
       className: "capitlaise",
     },
     {
       data: crypto.symbol,
       className: "capitlaise",
     },
     {
       data: crypto.current_price.toFixed(2),
       prefix: "$",
     },
     {
       data: crypto.total_volume,
     },
     {
       data: crypto.atl_change_percentage.toFixed(2),
       suffix: "%",
       className: crypto.atl_change_percentage > 0 ? "green" : "red",
     },
     {
       data: crypto.market_cap.toFixed(2),
       prefix: "Mkt Cap: $",
     },
   ];
   
   columnsData.forEach((col) => renderCrptoColumn(col, cryptoRow));

    table.appendChild(cryptoRow);

}
const fetchCryptoData = async () => {
    const reqUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const res = await fetch(reqUrl);
    cryptoData = await res.json();

    cryptoData.forEach((crypto)=> renderCrypto(crypto));
    console.log("Crypto data",cryptoData);


}

document.addEventListener('DOMContentLoaded', fetchCryptoData);