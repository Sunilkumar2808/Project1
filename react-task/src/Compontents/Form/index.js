import React, { useState, useEffect } from "react";
import "./style.css";
const FormExample = () => {
    const [data, setData] = useState({
        firstName: "",
        EmailAddress: "",
        Passwords: "",
        PhoneNumber: "",
        Resume: "",
        // checked: "",
        // checkeddata: "",
        dates: "",
        datetimelocal: "",
        hiddens: " Hidden Value",
        images: "",
        Months: "",
        ranges: "",
        searchs: "",
        Telephone: "",
        Times: "",
        urlpath: "",
        weeks: "",
    });

    const Reset = () => {
        setData({
            firstName: "",
            EmailAddress: "",
            Passwords: "",
            PhoneNumber: "",
            Resume: "",
            // checked: "",
            // checkeddata: "",
            dates: "",
            datetimelocal: "",
            hiddens: " Hidden Value",
            images: "",
            Months: "",
            ranges: "",
            searchs: "",
            Telephone: "",
            Times: "",
            urlpath: "",
            weeks: "",
        });
    };
    const handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        if (data.firstName === "") {
            alert("Enter the FirstName");
        } else if (data.EmailAddress === "") {
            alert("Enter the Emailaddress");
        } else if (data.Passwords === "") {
            alert("enter the password");
        } else if (data.PhoneNumber === "") {
            alert("enter the phonenumber");
        } else if (data.Resume === "") {
            alert("enter the resume");
        }
        // else if (data.checked === "") {
        //   alert("enter the checked ");
        // } else if (data.checkeddata === "") {
        //   alert("enter the checked ");
        // }
        else if (data.dates === "") {
            alert("enter the dates ");
        } else if (data.datetimelocal === "") {
            alert("enter the datetimelocal ");
        } else if (data.hiddens === "") {
            alert("enter the hiddens ");
        }
        // else if (data.images === "") {
        //   alert("enter the images ");
        // }
        else if (data.Months === "") {
            alert("enter the Months ");
        } else if (data.ranges === "") {
            alert("enter the ranges ");
        } else if (data.searchs === "") {
            alert("enter the searchs ");
        } else if (data.Telephone === "") {
            alert("enter the Telephone ");
        } else if (data.Times === "") {
            alert("enter the Times ");
        } else if (data.urlpath === "") {
            alert("enter the urlpath ");
        } else if (data.weeks === "") {
            alert("enter the weeks ");
        } else {
            alert("form Submitted");
            Reset();
        }
    };
    return (
        <div className="MainContainer">
            <form onSubmit={handlesubmit}>
                <div>
                    <label className="labelcontent">FirstName</label>
                    <input
                        type="text"
                        name="firstName"
                        value={data.firstName}
                        onChange={handlechange}
                        className="inputcontent"
                    />
                </div>
                <div>
                    <label className="labelcontent">Email Address</label>
                    <input
                        type="email"
                        name="EmailAddress"
                        value={data.EmailAddress}
                        onChange={handlechange}
                        className="inputcontent"
                    />
                </div>
                <div>
                    <label className="labelcontent">Password</label>
                    <input
                        type="text"
                        name="Passwords"
                        value={data.Passwords}
                        onChange={handlechange}
                        className="inputcontent"
                    />
                </div>
                <div>
                    <label className="labelcontent">PhoneNumber</label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        value={data.PhoneNumber}
                        onChange={handlechange}
                        className="inputcontent"
                    />
                </div>
                <div>
                    <label className="labelcontent">Resume</label>
                    <input
                        type="file"
                        name="Resume"
                        value={data.Resume}
                        onChange={handlechange}
                        className="inputcontent"
                    />
                </div>
                {/* <div className="inputcontent">
          <label className="labelcontent">radio</label>
          <input
            type="radio"
            name="checked"
            value={data.checked}
            onChange={handlechange}
            className="inputcontent"
          />
        </div>
        <div>
          <label className="labelcontent">CheckBox</label>
          <input
            className="inputcontent"
            type="checkbox"
            name="checkeddata"
            value={data.checkeddata}
            onChange={handlechange}
          />
        </div> */}
                <div>
                    <label className="labelcontent">Date&Time</label>
                    <input
                        className="inputcontent"
                        type="date"
                        name="dates"
                        value={data.dates}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">Date&Timelocal</label>
                    <input
                        className="inputcontent"
                        type="datetime-local"
                        name="datetimelocal"
                        value={data.datetimelocal}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">HiddenFile</label>
                    <input
                        className="inputcontent"
                        type="hidden"
                        name="hiddens"
                        value={data.hiddens}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label>Images</label>
                    <input
                        type="image"
                        name="images"
                        value={data.images}
                        onChange={handlechange}
                        src="logo192.png"
                        width="48"
                        height="48"
                    />
                </div>
                <div>
                    <label className="labelcontent">months</label>
                    <input
                        className="inputcontent"
                        type="month"
                        name="Months"
                        value={data.Months}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">range</label>
                    <input
                        className="inputcontent"
                        type="range"
                        name="ranges"
                        value={data.ranges}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">search</label>
                    <input
                        className="inputcontent"
                        type="search"
                        name="searchs"
                        value={data.searchs}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">AlternativePhonenumber</label>
                    <input
                        className="inputcontent"
                        type="tel"
                        name="Telephone"
                        value={data.Telephone}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">Time</label>
                    <input
                        className="inputcontent"
                        type="time"
                        name="Times"
                        value={data.Times}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">URl</label>
                    <input
                        className="inputcontent"
                        type="url"
                        name="urlpath"
                        value={data.urlpath}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <label className="labelcontent">week</label>
                    <input
                        className="inputcontent"
                        type="week"
                        name="weeks"
                        value={data.weeks}
                        onChange={handlechange}
                    />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
};
export default FormExample;