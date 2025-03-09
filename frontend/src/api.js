import axios from "axios";

import { useState } from "react";
const [data,setData]=useState("");

const getData=async()=>{
  const response=await Axios.get("http://localhost:5000/api/getData");
  setData(response.data);
}

useEffect(()=>{
  getData()
},[]);


const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get('${API_URL}/auctions') 
      .then(response => {
        console.log("Fetched Auctions:", response.data);
        setAuctions(response.data); 
      })
      .catch(error => {
        console.error("Error fetching auctions:", error);
      });
  }, []);
};
export const signup = async (userData) => {
  return axios.post(`${API_BASE_URL}/signup`, userData);
};

export const signin = async (userData) => {
  return axios.post(`${API_BASE_URL}/signin`, userData);
};

export const fetchAuctions = async () => {
  return axios.get(`${API_BASE_URL}/auctions`);
};

export const fetchAuctionById = async (id) => {
  return axios.get(`${API_BASE_URL}/auctions/${id}`);
};

export const createAuction = async (auctionData, token) => {
  return axios.post(`${API_BASE_URL}/auctionitem`, auctionData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const placeBid = async (id, bidAmount, token) => {
  return axios.post(`${API_BASE_URL}/bid/${id}`, { bid: bidAmount }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};