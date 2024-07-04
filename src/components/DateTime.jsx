import { useEffect } from "react";

const DateTime = () => {
  const [dateStringState, setDateStringState] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const dateString = `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`;
      setDateStringState(dateString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-white text-xl font-bold">{dateStringState}</h1>;
};

export default DateTime;
