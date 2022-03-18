
import SlopeCard from "../../components/slope/SlopeCard";
import SlopeButton from "../../components/slope/SlopeButton";
import GeneralButton from "../../components/general/GeneralButton";
import SlopeAdminCard from "../../components/slope/AdminCard";

import CorkContract, { ApproveType } from "../../contracts/Cork/CorkContract";
import {slopeData} from "../../mock/dashboard";

const Dashboard = () => {

  const handleNodeApprove = async () => {
    const result = await CorkContract.getInstance().approve(ApproveType.Node, 20);
    console.log(result);
  }

  const handleSwapApprove = async () => {
    const result = await CorkContract.getInstance().approve(ApproveType.Swap, 20);
    console.log(result);
  }

  const handleCompound = (index) => {
    console.log(index);
  };

  const handleClaim = (index) => {
    console.log(index);
  };

  return (
    <div className="page-dashboard">
      <div className="choose-slope">
        <div className="title">{"Choose Your Slope"}</div>
        <div className="header-container">
          <div className="text">
            {"Corkscrew Financial features four node tiers."}
            <br /> {"Higher tiers are more expensive but feature a quicker ROI."}
          </div>
          <div className="approve-container">
          <GeneralButton onClick={handleNodeApprove} >
              Approve for Node
            </GeneralButton>

            <GeneralButton onClick={handleSwapApprove} >
              Approve for Swap
            </GeneralButton>
          </div>
        </div>
        <div className="cards">
          <SlopeCard type="blue" index="0" />
          <SlopeCard type="red" index="1" />
          <SlopeCard type="black" index="2" />
          <SlopeCard type="doubleBlack" index="3" />
        </div>
      </div>

      <div className="manage-slope">
        <div className="title">{"Manage Your Slopes"}</div>
        <div className="header-container">
          <div className="text">
            {"Claim your rewards or compound them for"}
            <br /> {"greater rewards later."}
          </div>
          <div></div>

        </div>
        <div className="cards">
          <SlopeAdminCard />
          <div className="all-scope-card">
            <div className="title">{"All Slopes"}</div>
            <table>
              <thead>
                <tr>
                  <th>{"TIER"}</th>
                  <th>{"DAILY YIELD"}</th>
                  <th>{"REWARDS"}</th>
                  <th>{"COMPOUND"}</th>
                  <th>{"CLAIM"}</th>
                </tr>
              </thead>
                <tbody>
                  {slopeData.map((data, index) => (
                    <tr key={index} className={"type" + index}>
                      <td><img src={data.imgSrc} /></td>
                      <td>{data.dailyYield}</td>
                      <td>{data.reward}</td>
                      <td><SlopeButton onClick={() => handleCompound(data.index)} dark>{"Compound Rewards"}</SlopeButton></td>
                      <td><SlopeButton onClick={() => handleClaim()}>{"Claim Rewards"}</SlopeButton></td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
