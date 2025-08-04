// Rules.js
import React from "react";

const Rules = () => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-black max-w-[600px]">
      <h2 className="text-2xl font-bold mb-2">Game Rules</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Select a number between 1 and 6.</li>
        <li>Click the dice to roll it.</li>
        <li>If the rolled dice matches your selected number, you gain that many points.</li>
        <li>If it doesn't match, your score resets to 0.</li>
        <li>You must select a number before rolling the dice.</li>
      </ul>
    </div>
  );
};

export default Rules;
