import React, { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 300; // Slower increment

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 20); // Slower update interval
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="flex gap-8 mt-10">
      <div className="text-center">
        <h2
          className="text-4xl font-bold text-primary counter"
          data-target="100"
        >
          0
        </h2>
        <p className="text-sm text-gray-300">Projects Completed</p>
      </div>
      <div className="text-center">
        <h2
          className="text-4xl font-bold text-primary counter"
          data-target="50"
        >
          0
        </h2>
        <p className="text-sm text-gray-300">Happy Clients</p>
      </div>
      <div className="text-center">
        <h2
          className="text-4xl font-bold text-primary counter"
          data-target="10"
        >
          0
        </h2>
        <p className="text-sm text-gray-300">Years of Experience</p>
      </div>
    </div>
  );
};

export default Counter;
