import GeneralButton from "../../components/general/GeneralButton";
import GeneralText from "../../components/general/GeneralText";

const PageSale = () => {
  const handleMoreInformation = () => {
    console.log("more information buttton clicked");
  };

  return (
    <div className="page-presale">
      <div className="information">
        <GeneralText small bold>{"NAAS / DAAS On AVAX"}</GeneralText>
        <div className="information-title">{"Corkscrew Financial Pre-Sale"}</div>
        <GeneralText>
          {`Corkscrew Financial is a Node/DeFi As A Service protocol built on the Avalanche blockchain network. 
          This is some more descriptive text introducing the protocol.`}
        </GeneralText>
        <GeneralButton onClick={handleMoreInformation} rounded dark> {"More Information"} </GeneralButton>
      </div>
      <div className="exchange">
        <div className="exchange-title">{"Pre-Sale is Live"}</div>
        <div className="content">
          <div className="time-remaining">
            <div>{"TIME REMAINING:"}</div>
            <div>{"00 : 23 : 47"}</div>
          </div>
          <div className="enter-text">
            {"Enter the amount of AVAX you want to exchange for CORK:"}
          </div>
          <div className="form-field">
            <input className="input" placeholder="AVAX" />
            <button className="button">{"Buy CORK"}</button>
          </div>
          <GeneralText>{"At launch you will be able to create nodes with the CORK you buy during the pre-sale."}</GeneralText>
        </div>
      </div>
    </div>
  );
};

export default PageSale;
