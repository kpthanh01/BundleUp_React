import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DealList from "./DealList";
import * as dealService from "../../services/dealService";
import * as userService from "../../services/userService";
import DealDetails from "./DealDetails";
import DealForm from "./DealForm";

const Deal = () => {
  const [dealList, setDealList] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const addDeal = async (deal) => {
  }

  useEffect(() => {
    const getDeals = async () => {
      try {
        const deals = await dealService.index();
        if (deals.error) {
          throw new Error(deals.error);
        }
        setDealList(deals);
      } catch (error) {
        console.log("Error fetching deals:", error);
      }
    };
    getDeals();
  }, []);
    const handleDealSelect = (dealItem) => {
      setSelectedDeal(dealItem);
    };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<DealList dealList={dealList} handleDealSelect={handleDealSelect}/>}
        />
        <Route
          path="/:dealId"
          element={<DealDetails dealList={dealList} selectedDeal={selectedDeal}/>}
        />
        <Route
            path="/new"
            element={<DealForm addDeal={addDeal}  />}
          />
      </Routes>
    </div>
  )
}

export default Deal