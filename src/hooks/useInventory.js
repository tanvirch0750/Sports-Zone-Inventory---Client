import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    setLoadData(true);
    fetch("http://sheltered-dusk-40415.herokuapp.com/inventory")
      .then((response) => response.json())
      .then((data) => {
        setInventory(data);
        setLoadData(false);
      });
  }, []);

  return [inventory, loadData, setInventory, setLoadData];
};

export default useInventory;
