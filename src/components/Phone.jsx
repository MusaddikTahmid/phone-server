import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <>
      <h2>{phone.name}</h2>
      <img src={phone.image} alt="" />
    </>
  );
};

export default Phone;
