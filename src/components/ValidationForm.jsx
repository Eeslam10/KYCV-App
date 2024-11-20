import React from 'react';
import { number } from 'yup';


const ValidationForm = () => {
  const initialValues = {
    name: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    nin: '',
    lga: '',
    maritalStatus: '',
    nextOfKid: '',
    nextOfKinAddress: '',
    nextOfKinNumber: '',
    bankName: '',
    bvn: '',
    bankName: '',
    accNumber: '',
    bloodGroup: '',
    disability: '',
  };


  const registrationSchema = Yup.object().shape({
    email: Yup.string().name('Enter Full Nname').required('Name is required'),
    dateOfBirth: Yup.string(date).required('Enter Date of Birth Please'),
    gender: Yup.string().required('Enter Genter'),
    address: Yup.string().required('Enter Address'),
    nin: Yup.string(number).required('Enter NIN'),
    lga: Yup.string().required('Enter LGA'),
    nin: Yup.string(number).required('Enter NIN'),
    nin: Yup.string(number).required('Enter NIN'),
    nin: Yup.string(number).required('Enter NIN'),

  });

  const submitForm = (values)=>{
    alert(JSON.stringify(values))
  }



  return (
    <div>
      <h1>Form Validation Example</h1>
        <form>
          {/* Form fields */}
        </form>
    </div>
  );
};

export default ValidationForm;