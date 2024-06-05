import React,{useState,} from 'react'
import { FaUsers, FaClipboardList, FaShoppingBag, FaAccusoft,FaBars,FaSearch } from "react-icons/fa";
import "./style.sass"

const [customers, setCustomers] = useState([]);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', address: '' });

  const toggleAddCustomerSection = () => {
    setShowAddCustomer(!showAddCustomer);
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewCustomer({ ...newCustomer, [id]: value });
  };

  const addCustomer = () => {
    
    setNewCustomer({ name: '', email: '', address: '' });
  };
export default function Admin() {
  return (
    <div>
      <div className="sidebar">
      <div className="sidebar-brand">
        <h2>
          <a href="/"><FaAccusoft/> Mercedes</a>
        </h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><a href="/customers" className="active"><FaUsers /> <span>Customers</span></a></li>
          <li><a href="/products"><FaClipboardList /> <span>Products</span></a></li>
          <li><a href="/bill"><FaShoppingBag /> <span>Bill</span></a></li>
        </ul>
      </div>
    </div>

    <header>
      <h2>
        <label>
          <FaBars />
        </label>
        Customers
      </h2>
      <div className="search-wrapper">
        <FaSearch />
        <input type="search" placeholder="Search here" />
      </div>
      <div className="user-wrapper">
        <img src="" alt="Admin" width="40" height="40" />
        <div>
          <h4>Lionel Messi</h4>
          <small>Super admin</small>
        </div>
      </div>
    </header>
    </div>
  )
}
