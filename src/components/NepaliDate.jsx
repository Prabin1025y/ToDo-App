import NepaliDate from "nepali-date-converter";

const NepaliDateHello = () => {

    let nepDate = new NepaliDate("2060/10/24");
    console.log(nepDate.toJsDate());

  return <h1>Hello</h1>;
};

export default NepaliDateHello;
