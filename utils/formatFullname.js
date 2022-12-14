module.exports = (fullName) => {
  if (typeof fullName !== 'string' || !fullName) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  if(fullName.split(' ') !== 2) return 'Error';
  return (
    firstName[0].toUpperCase() +
    firstName.slice(1).toLowerCase() +
    ' ' +
    lastName[0].toUpperCase() +
    lastName.slice(1).toLowerCase()
  );
};
