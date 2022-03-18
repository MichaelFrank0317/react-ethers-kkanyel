import {slopeInfo} from '../../config/slopeInfo';
import NodeContract from '../../contracts/Node/NodeContract';

const Slope = ({ type, index }) => {
  const handleBuySlope = async () => {
    const result = await NodeContract.getInstance().mint(index, "https://corkscrew.com");
    console.log(result);
  }

  return (
    <div className={"slope " + type}>
      <div className="header">
        <div className="header-title">
          <img src={slopeInfo[index].imgSrc} />
          {slopeInfo[index].title}
        </div>
        <div>{slopeInfo[index].amount}</div>
      </div>
      <div className="cork">
        <div className="cork-amount">{slopeInfo[index].cork}</div>
        <div className="cork-text">{"CORK"}</div>
      </div>
      <div className="stats">
        <div className="flex">
          <div>
            <div className="stats-item">{"YIELD"}</div>
            <div className="stats-amount">{`${slopeInfo[index].yield}%`}</div>
          </div>
          <div>
            <div className="stats-item">{"AFTER ROI"}</div>
            <div className="stats-amount">
              {`${slopeInfo[index].afterRoi}%`}
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div>
            <div className="stats-item">{"SNOWBALL"}</div>
            <div className="stats-amount">
              {`${slopeInfo[index].snowBall}%`}
            </div>
          </div>
          <div>
            <div className="stats-item">{"DAILY SELL LIMIT"}</div>
            <div className="stats-amount">
              {`${slopeInfo[index].dailySellLimit}%`}
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleBuySlope} className="buy-btn">{`Buy a ${slopeInfo[index].title} Node`}</button>
    </div>
  );
};

export default Slope;
