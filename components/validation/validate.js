
export const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Cannot be blank";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Cannot be blank";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }
  return errors;
}

export const validateCourt = (values) => {
  let errors = {};
  if (!values?.courtName) {
    errors.courtName = "Caourt name cannot be blank"
  } else if (!values?.address) {
    errors.address = "Address cannot be blank"
  } else if (!values?.facility) {
    errors.facility = "Facility cannot be blank"
  }
  else if (!values?.price) {
    errors.price = "Price cannot be blank"
  } else if (!values?.location) {
    errors.location = "Location cannot be blank"
  } else if (!values?.facility) {
    errors.facility = "cannot be blank"
  }
  return errors;
}