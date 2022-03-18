import SlopeButton from "./SlopeButton";

const SlopeAdminCard = () => {
  return (
    <div className="slope-admin-card">
      <div className="card-title">{"Slope Admin"}</div>
      <div className="reward">
        <div className="reward-item">{"CORK REWARDS"}</div>
        <div className="reward-amount">{"1,214.54"}</div>
      </div>
      <div className="stats">
        <div className="flex">
          <div>
            <div className="stats-item">{"SLOPES"}</div>
            <div className="stats-amount">{`4`}</div>
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
          <input placeholder="Rewards to claim" />
          <button className="max-btn">{"MAX"}</button>
        </div>
        <button className="claim-btn">{"Claim Rewards"}</button>
      </div>
      <SlopeButton dark fullWidth>
        {"Compound All Slopes"}
      </SlopeButton>
    </div>
  );
};

export default SlopeAdminCard;
