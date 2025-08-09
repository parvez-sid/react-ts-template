import { useState } from "react";

export default function Accordian() {
  const [currIdx, setCurrIdx] = useState(null);
  const data = [
    { title: "acc 1", desc: "acc 1 content" },
    { title: "acc 2", desc: "acc 2 content" },
    { title: "acc 3", desc: "acc 3 content" },
  ];

  const handleClick = (index: any) => setCurrIdx((prevIndex) => (prevIndex === index ? null : index));
  
  return (
    <div className="App">
      <h1>Custom Accordian</h1>
      <div className="accordion">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="accordion-item"
              onClick={() => handleClick(index)}
            >
              <button className="accordion-button">{item.title}</button>
              {currIdx === index && (
                <div
                  className={`accordion-panel ${
                    currIdx === index ? "active" : ""
                  }`}
                >
                  <p>{item.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
