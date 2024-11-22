import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DealList from "./DealList";
import * as dealService from "../../services/dealService";
import DealDetails from "./DealDetails";
import DealForm from "./DealForm";
import "./Deal.css"

const Deal = () => {
  const [dealList, setDealList] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);

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
  }, [selectedDeal]);

  const handleDealSelect = (dealItem) => {
    setSelectedDeal(dealItem);
  };

  const handleAddDeal = async (formData) => {
    try {
      const newDeal = await dealService.create(formData);
      if (newDeal.error) {
        throw new Error(newDeal.error);
      }
      setDealList([newDeal, ...dealList]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<DealList dealList={dealList} handleDealSelect={handleDealSelect} />}
        />
        <Route
          path="/:dealId"
          element={<DealDetails dealList={dealList} selectedDeal={selectedDeal} />}
        />
        <Route
          path="/dealForm"
          element={<DealForm handleAddDeal={handleAddDeal}/>}
        />
      </Routes>
    </div>
  )
}

export default Deal