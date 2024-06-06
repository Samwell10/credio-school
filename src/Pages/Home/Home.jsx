import "./Home.css";
import Card from "../../Components/Card/Card";
import { PiStudent } from "react-icons/pi";
import { LuCreditCard } from "react-icons/lu";
import BasicTable from "../../Components/Tables/StudentTables";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = ({
    
}) => {

    return ( 
        
            <div className="home">
                <div className="home-top">
                    <p>Overview</p>
                    {/* <select>
                        <optgroup>
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>Next Month</option>
                        </optgroup>
                    </select> */}
                </div> 
                <div className="home-body">
                    <div className="home-card">
                        <div className="card-div">
                            <Card title="Students" numbers="500" icons={<PiStudent/>} color="#E3F5FF"/>
                        </div>
                        <div className="card-div">
                            <Card title="Payments" numbers="#300,000" icons={<LuCreditCard/>} color="#E5ECF6"/>
                        </div>
                    </div>
                    <div className="home-tables">
                        <p>Students info</p>
                        
                                <div className="tables">
                                    <BasicTable data={getprofile?.lastTenTransactions}/>
                                </div>
                        

                    </div>
                    <div className="button-con">
                        <Link to="/home/newstudent"><button className="create-button">Create a New Student Plan</button></Link>
                    </div>

                </div>
            </div>
    
    );
}

export default Home;