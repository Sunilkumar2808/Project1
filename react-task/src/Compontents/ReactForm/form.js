import React, { useState, useEffect } from "react";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const RegisrationForm = () => {

    const initialValue = {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        address: "",
        gender: "",
        city: "",
        district: "",
        state: "",
        employee_emailid: "",
        employee_phonenumber: "",
        alternative_phonenumber: "",
    };

    const handleclose = () => {
        setFormValue({
            first_name: "",
            last_name: "",
            date_of_birth: "",
            address: "",
            gender: "",
            city: "",
            district: "",
            state: "",
            employee_emailid: "",
            employee_phonenumber: "",
            alternative_phonenumber: "",
        });
    };





    useEffect(() => {
        const localStorageData = localStorage.getItem("PerosnalDetails");
        const parsedData = JSON.parse(localStorageData);
        console.log(parsedData, "parsedData")
    }, [])



    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
        localStorage.setItem("PerosnalDetails", JSON.stringify(formValue));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValue));
    };



    const validate = (values) => {
        const errors = {};
        const fname = /^[a-zA-Z]{5,20}$/;
        const lname = /^[a-zA-Z]{5,20}$/;
        const City = /^[a-zA-Z]{3,20}$/;
        const phone = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const Alt = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.first_name) {
            errors.first_name = "Enter The First Name!";
        } else if (!fname.test(values.first_name)) {
            errors.first_name = "Please Enter Valid First Name!";
        }
        if (!values.last_name) {
            errors.last_name = "Enter The Last Name!";
        } else if (!lname.test(values.last_name)) {
            errors.last_name = " Please Enter Valid Last Name!";
        }
        if (!values.date_of_birth) {
            errors.date_of_birth = "Enter The Date Of Birth!";
        }
        if (!values.address) {
            errors.address = "Enter The address!";
        }
        if (!values.gender) {
            errors.gender = "Select The Gender!";
        }
        if (!values.city) {
            errors.city = "Enter The City!";
        } else if (!City.test(values.city)) {
            errors.city = "Please Enter The Valid City!";
        }
        if (!values.district) {
            errors.district = "Select The district!";
        }
        if (!values.state) {
            errors.state = "Select The State!";
        }
        if (!values.employee_emailid) {
            errors.employee_emailid = "Enter The Email address!";
        } else if (!email.test(values.employee_emailid)) {
            errors.employee_emailid = "Please Enter The Valid Email address!";
        }
        if (!values.employee_phonenumber) {
            errors.employee_phonenumber = "Enter The Phone Number!";
        } else if (!phone.test(values.employee_phonenumber)) {
            errors.employee_phonenumber = "Please Enter The Valid Phone Number!";
        }
        if (!values.alternative_phonenumber) {
            errors.alternative_phonenumber = "Enter The Alternative Phone Number!";
        } else if (!Alt.test(values.alternative_phonenumber)) {
            errors.alternative_phonenumber =
                "Please Enter The Valid alternative_phonenumber Phone Number!";
        }

        // if (Object.keys(errors).length === 0) {
        //     toast.success(
        //         "Employee Personal Details Have Been Successfully Submitted!",
        //         {
        //             position: toast.POSITION.TOP_RIGHT,
        //         }
        //     );


        // }
        else if (
            values.first_name !== "" &&
            values.last_name !== "" &&
            values.date_of_birth !== "" &&
            values.address !== "" &&
            values.gender !== "" &&
            values.city !== "" &&
            values.district !== "" &&
            values.employee_emailid !== "" &&
            values.employee_phonenumber !== "" &&
            values.alternative_phonenumber

        ) {
            alert("Form Submitted")
            handleclose()
        }
        return errors;
    };
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" id="MainContainer">
                        <div className="tag">
                            <h2>Personal Details</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-sm-3 form-group">
                                        <div className="whole">
                                            <label className="lable">
                                                First Name<span className="RequriedColor"> * </span>
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter First Name"
                                            className="form-control"
                                            autoComplete="off"
                                            name="first_name"
                                            value={formValue.first_name}
                                            onChange={(e) => handleChanges(e)}
                                        />
                                        <p className="error">{formError.first_name}</p>
                                    </div>
                                    <div className="col-sm-3 form-group">
                                        <div className="whole">
                                            <label className="lable">
                                                Last Name<span className="RequriedColor"> * </span>
                                                <br></br>
                                            </label>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter  Last Name"
                                            className="form-control"
                                            autoComplete="off"
                                            name="last_name"
                                            value={formValue.last_name}
                                            onChange={(e) => handleChanges(e)}
                                        />
                                        <p className="error">{formError.last_name}</p>
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <div className="whole">
                                            <label htmlFor="datefield" className="lable">
                                                Date Of Birth<span className="RequriedColor"> * </span>
                                            </label>
                                        </div>
                                        <div className="date-picker-container" id="datepickervalue">

                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Select Date Of Birth"
                                                id="datefield"
                                                autoComplete="off"
                                                value={formValue.date_of_birth}
                                                onChange={(e) => handleChanges(e)}
                                                name="date_of_birth"
                                            />

                                            <p className="error">{formError.date_of_birth}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <div className="form-group">
                                            <div className="whole">
                                                <label className="lable">
                                                    address<span className="RequriedColor"> * </span>
                                                </label>
                                            </div>
                                            <textarea
                                                placeholder="Enter address"
                                                rows="3"
                                                className="form-control"
                                                autoComplete="off"
                                                name="address"
                                                value={formValue.address}
                                                onChange={(e) => handleChanges(e)}
                                            ></textarea>
                                            <p className="error">{formError.address}</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <div className="wholes">

                                            <label className="lable">
                                                Gender<span className="RequriedColor"> * </span>
                                            </label>
                                            <div className="radiofield">
                                                <div className="formcheck">
                                                    <input
                                                        type="radio"
                                                        value="male"
                                                        id="male"
                                                        name="gender"
                                                        onChange={(e) => handleChanges(e)}
                                                    />
                                                    <div className="tt">
                                                        <label
                                                            htmlFor="male"
                                                            className="formCheckerLable"
                                                        // htmlFor="exampleRadios1"
                                                        >
                                                            Male
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="formcheck">
                                                    <input
                                                        type="radio"
                                                        value="female"
                                                        id="female"
                                                        name="gender"
                                                        onChange={(e) => handleChanges(e)}
                                                    />
                                                    <div className="tt">
                                                        <label
                                                            className="formCheckerLable"
                                                            htmlFor="female"
                                                        >
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="formcheck">
                                                    <input
                                                        type="radio"
                                                        value="others"
                                                        id="others"
                                                        name="gender"
                                                        onChange={(e) => handleChanges(e)}
                                                    />
                                                    <div className="tt">
                                                        <label
                                                            className="formCheckerLable"
                                                            htmlFor="others"
                                                        >
                                                            Others
                                                        </label>
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <p className="error">{formError.gender}</p>
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <div className="whole">
                                            <label className="lable">
                                                City<span className="RequriedColor"> * </span>
                                            </label>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Enter City"
                                            className="form-control"
                                            autoComplete="off"

                                            value={formValue.city}
                                            onChange={(e) => handleChanges(e)}
                                            name="city"
                                        />
                                        <p className="error">{formError.city}</p>
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <div className="whole">
                                            <label className="lable">
                                                district<span className="RequriedColor"> * </span>
                                            </label>
                                        </div>
                                        <select
                                            placeholder="Select district"
                                            className="form-control"
                                            name="district"
                                            value={formValue.district}
                                            onChange={(e) => handleChanges(e)}
                                        >
                                            <option value="">Select district</option>
                                            <option value="female">Ruhango</option>
                                            <option value="male">Nyaruguru</option>
                                            <option value="other">Nyamagabe</option>
                                        </select>
                                        <p className="error">{formError.district}</p>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <div className="whole">
                                            <label className="lable">
                                                State<span className="RequriedColor"> * </span>
                                            </label>
                                        </div>
                                        <select
                                            className="form-control"
                                            name="state"
                                            value={formValue.state}
                                            onChange={(e) => handleChanges(e)}
                                        >
                                            <option value="">Select State</option>
                                            <option value="chennai">Ruhango</option>
                                            <option value="bangalore">Nyaruguru</option>
                                            <option value="mumbai">Nyanza</option>
                                            <option value="kolkata">Nyamagabe</option>
                                        </select>
                                        <p className="error">{formError.state}</p>
                                    </div>

                                    <div className="col-sm-6 form-group">
                                        <div className="form-group">
                                            <div className="whole">
                                                <label className="lable">
                                                    Email address
                                                    <span className="RequriedColor"> * </span>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="abc@example.com"
                                                className="form-control"
                                                autoComplete="off"
                                                name="employee_emailid"
                                                value={formValue.employee_emailid}
                                                onChange={(e) => handleChanges(e)}
                                                style={{ textTransform: "LowerCase" }}
                                            />
                                            <p className="error">{formError.employee_emailid}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <div className="whole">
                                                <label className="lable">
                                                    Phone Number<span className="RequriedColor"> * </span>
                                                </label>
                                            </div>
                                            <input
                                                type="number"
                                                onKeyDown={(evt) =>
                                                    ["e", "E"].includes(evt.key) && evt.preventDefault()
                                                }
                                                placeholder="Enter Phone Number"
                                                className="form-control"
                                                autoComplete="off"
                                                name="employee_phonenumber"
                                                value={formValue.employee_phonenumber}
                                                onChange={(e) => handleChanges(e)}
                                            />
                                            <p className="error">{formError.employee_phonenumber}</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <div className="whole">
                                                <label className="lable">
                                                    Alternative
                                                    <span className="RequriedColor"> * </span>
                                                </label>
                                            </div>
                                            <input
                                                type="number"
                                                onKeyDown={(evt) =>
                                                    ["e", "E"].includes(evt.key) && evt.preventDefault()
                                                }
                                                placeholder="Enter alternative_phonenumber Phone Number"
                                                className="form-control"
                                                autoComplete="off"
                                                name="alternative_phonenumber"
                                                value={formValue.alternative_phonenumber}
                                                onChange={(e) => handleChanges(e)}
                                            />
                                            <p className="error">
                                                {formError.alternative_phonenumber}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="Mainbtn">
                                        <button id="btn" onClick={validate}>
                                            Save
                                        </button>
                                        <button type="reset" id="btn" onClick={handleclose}>
                                            Cancel
                                        </button>
                                        {/* <button type="submit" id="btn" onClick={HandleNext}>
                                            Next
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisrationForm;
