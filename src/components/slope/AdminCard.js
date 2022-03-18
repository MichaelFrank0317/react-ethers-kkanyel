import SlopeButton from "./SlopeButton";

const SlopeAdminCard = ({slopes, handleClaimAll}) => {
  return (
    <div className="slope-admin-card">
      <div className="card-title">{"Slope Admin"}</div>
      <div className="reward">
        <div className="reward-item">{"CORK REWARDS"}</div>
        <div className="reward-amount">{slopes.reduce((prev, slope) => {
          return prev + parseFloat(slope.rewards)
        }, 0)}</div>
      </div>
      <div className="stats">
        <div className="flex">
          <div>
            <div className="stats-item">{"SLOPES"}</div>
            <div className="stats-amount">{slopes.length}</div>
          </div>
          <div>
            <div className="stats-item">{"DAILY YIELD"}</div>
            <div className="stats-amount">{`22`}</div>
          </div>
        </div>
        <div className="flex mt-10">
          <div>
            <div className="stats-item">{"SNOWBALL"}</div>
            <div className="stats-amount">{`0.05%`}</div>
          </div>
          <div>
            <div className="stats-item">{"DAILY SELL LIMIT"}</div>
            <div className="stats-amount">{`15%`}</div>
          </div>
        </div>
      </div>
      <div className="claim-field">
        <div className="input-field">
          <input disabled placeholder="Rewards to claim" />
          <button className="max-btn">{"MAX"}</button>
        </div>
        <button onClick={handleClaimAll} className="claim-btn">{"Claim Rewards"}</button>
      </div>
      <SlopeButton disabled dark fullWidth>
        {"Compound All Slopes"}
      </SlopeButton>
    </div>
  );
};

export default SlopeAdminCard;
