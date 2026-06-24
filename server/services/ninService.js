const ninDatabase = {
  "12345678901": {
    firstName: "Gabriel",
    lastName: "Divine",
    gender: "Male",
    dob: "2006-10-01",
    phone: "08012345678",
    address: "Port Harcourt",
  },

  "98765432109": {
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    dob: "1999-05-15",
    phone: "08123456789",
    address: "Lagos",
  },
};

const getUserByNIN = (nin) => {
  return ninDatabase[nin] || null;
};

module.exports = getUserByNIN;