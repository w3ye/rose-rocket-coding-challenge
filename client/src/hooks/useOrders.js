import { useState, useEffect } from "react";
import axios from "axios";

export default function useOrders(value) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders')
    .then((result) => {
      setOrders(result.data)
    }).catch((err) => {
      return err
    });
  }, []);
  return { orders };
}
