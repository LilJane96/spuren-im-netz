function getUnitsArray() {
    const data = JSON.parse(localStorage.getItem("UnitsArray")) || [];
    return data;
  }
  
  export default getUnitsArray;
  