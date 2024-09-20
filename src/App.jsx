import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const imageSrc =
    level >99
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42XsOq7D8yeOp5ZBjt493IwxVG2y1LjxIqQ&s" 
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBb0tSK7MJ7Z6j_eKMXneHgpOKNmcPDdDw4w&s";

  return (
    <>
      <h1>Level {level}</h1>
      <img src={imageSrc} alt="หมูเด้ง" height={200 + level} />
      <br />

      <button onClick={() => feed(5)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5D5dFz-8qf8nvKS8XwlN7UIvHGiZ3uo36Q&s"
          alt="แตงโม"
          height={100}
        />
      </button>
      <button onClick={() => feed(10)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuOiTeV3GLsunlvLi7GdBsc280rf_L-dUQQ&s"
          alt="ฟักทอง"
          height={100}
        />
      </button>
      <button onClick={() => feed(20)}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKgLSc_KF2s3qs45FiU08LPYzfdm_qXWfdw&s"
          alt="หญ้า"
          height={100}
        />
      </button>
    </>
  );
}