import React, { useEffect, useState } from 'react';
import './test.css'

const Test = () => {
    const user =localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const[allUser, setAllUser] = useState([])

    useEffect(()=>{
        fetch('https://test.nexisltd.com/test',{
            
            method: "GET",

            headers: {
                
              "Content-Type": "application/json",
              authorization: `bearer ${user.access_token}`,
            },
        })
        .then(res => res.json())
        .then(data => {
            setAllUser(data)
            console.log(data)
        })
    },[user])
    return (
        <div className="py-5">
      <h2 className="text-3xl text-center text-white w-1/2 mx-auto my-4 rounded-md test-data font-bold py-2">Attendance Information</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              
              <th>Date</th>
              <th>Empolyee Name</th>
              <th>Status</th>
              
            </tr>
          </thead>
          {/* <tbody>
            {allUser?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.product_Name}</td>
                <td>{product.seller_email}</td>

                
               
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
     
    </div>
    );
};

export default Test;