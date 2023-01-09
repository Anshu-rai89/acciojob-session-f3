const cryptoDashTableElement = document.getElementById("crpto-dash");
const tableColumnNames = [
  {
    tagName: "img",
    className: "crypto-image",
    name: "image",
    prefix: "",
  },
  {
    tagName: "span",
    className: "td",
    name: "name",
    prefix: "",
  },
  {
    tagName: "span",
    className: "capital",
    name: "symbol",
    prefix: "",
  },
  {
    tagName: "span",
    className: "td",
    name: "current_price",
    prefix: "$",
  },
  {
    tagName: "span",
    className: "td",
    name: "total_volume",
    prefix: "",
  },
  {
    tagName: "span",
    className: "td",
    name: "ath_change_percentage",
    prefix: "",
  },
  {
    tagName: "span",
    className: "td",
    name: "market_cap",
    prefix: "Market Cap:",
  },
];

function createColumns(rowElement, data) {
  for (tableColumn of tableColumnNames) {
    //console.log("Column",tableColumn);
    const column = document.createElement("td");
    const element = document.createElement(tableColumn.tagName);

    if (tableColumn.tagName === "img") {
      element.src = data.image;
    }

    if (tableColumn.name === "ath_change_percentage") {
      data[tableColumn.name] = data[tableColumn.name].toFixed(2);
      if (data[tableColumn.name] > 0) {
        element.classList.add("class-green");
      } else {
        element.classList.add("class-red");
      }
    }
    element.textContent = tableColumn.prefix + data[tableColumn.name];
    element.classList.add(tableColumn.className);
    column.appendChild(element);
    rowElement.appendChild(column);

  }
}
/**
 *  It Renders Rows for Crypto Dashboard
 *  @param {Array}cryptoData
 */
function addCryptoDashTableRow(cryptoData) {
  const cryptoRowElement = document.createElement("tr");
  createColumns(cryptoRowElement, cryptoData);
  cryptoDashTableElement.appendChild(cryptoRowElement);

  // I have to create a Row using Tr element
  // I have to add Td elements inside my row
}
/**
 *  It fetches crypto data from server using a http get method
 *  JS Docs
 */
const fetchCryptoData = async () => {
  // We have to make api call & get the data
  const requestUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const response = await fetch(requestUrl, {
    method: "GET",
  });
  const cryptoData = await response.json();

  cryptoData.forEach((crypto) => {
    addCryptoDashTableRow(crypto);
  });

  // Render our Dashboard
};


document.addEventListener("DOMContentLoaded", fetchCryptoData);
