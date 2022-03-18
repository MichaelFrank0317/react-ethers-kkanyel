import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import SlopeCard from "../../components/slope/SlopeCard";
import SlopeButton from "../../components/slope/SlopeButton";
import GeneralButton from "../../components/general/GeneralButton";
import SlopeAdminCard from "../../components/slope/AdminCard";

import NodeContract from "../../contracts/Node/NodeContract";
import CorkContract, { ApproveType } from "../../contracts/Cork/CorkContract";
import { slopeInfo } from '../../config/slopeInfo';
import { useEffect, useState } from "react";
import { computeHeadingLevel } from '@testing-library/react';

const Dashboard = () => {
  const [slopes, setSlopes] = useState([]);
  const [open, setOpen] = useState(false);
  const [compoundRewards, setCompoundRewards] = useState(0);
  const [compoundNodeId, setCompoundNodeId] = useState(0);

  useEffect(async () => {
    const result = await NodeContract.getInstance().getSlopes();
    setSlopes(result);
  }, [])

  const handleNodeApprove = async () => {
    await CorkContract.getInstance().approve(ApproveType.Node);
  }

  const handleSwapApprove = async () => {
    await CorkContract.getInstance().approve(ApproveType.Swap);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleCompound = (index) => {
    const slope = slopes[index];
    setCompoundNodeId(slope.id);
    setCompoundRewards(slope.rewards);
    setOpen(true);
  };

  const handleCompoundMint = async (nodeType) => {
    await NodeContract.getInstance().bailOutMint(nodeType, [compoundNodeId]);
  }

  const handleClaim = async (nodeId) => {
    await NodeContract.getInstance().claimRewardsById(nodeId);
    setOpen(false);
  };

  const handleClaimAll = async(amount) => {
    await NodeContract.getInstance().claimAll();
  }

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
          <SlopeAdminCard slopes={slopes} handleClaimAll={handleClaimAll} />
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
                    {slopes.map((slope, index) => (
                      <tr key={index} className={"type" + slope.nodeType}>
                        <td><img src={slopeInfo[slope.nodeType].imgSrc} alt="img" /></td>
                        <td>{slopeInfo[slope.nodeType].dailyYield}</td>
                        <td>{slope.rewards}</td>
                        <td><SlopeButton onClick={() => handleCompound(index)} dark>{"Compound Rewards"}</SlopeButton></td>
                        <td><SlopeButton onClick={() => handleClaim(slope.id)}>{"Claim Rewards"}</SlopeButton></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="all-scope-card">
          <h2 className="title">{"Available Nodes"}</h2>
          <div className={`modal-slope-item-wrapper`}>
            <span className="item image text-center">{"TIER"}</span>
            <span className="item cork text-center">{"CORK"}</span>
            <span className="item rewards text-center">{"DAILY YIELD"}</span>
            <span className="item amount text-center">{"AMOUNT"}</span>
            <span className="item tool-button text-center">{"BUY"}</span>
          </div>
          {slopeInfo.filter((slope) => slope.cork < compoundRewards).map((slope, index) => (
            <div key={index} className={`${'type' + index} modal-slope-item-wrapper`}>
              <span className="item image"><img src={slope.imgSrc} alt="img" /></span>
              <span className="item cork text-center">{slope.cork}</span>
              <span className="item rewards text-center">{slope.dailyYield}</span>
              <span className="item amount text-center">{slope.amount}</span>
              <span className="item tool-button">
                <SlopeButton onClick={() => handleCompoundMint(index)} dark>{"Buy"}</SlopeButton>
              </span>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
