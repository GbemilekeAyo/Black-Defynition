import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContestantDashboard() {
  const [contestantInfo, setContestantInfo] = useState(null);

  useEffect(() => {

    const fetchContestantInfo = async () => {
      try {
        const response = await axios.get('https://zany-lime-panther-vest.cyclic.app/contestant/info');
        if (response.status === 200) {
          setContestantInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching contestant information: ', error);
      }
    };

    // Call the fetchContestantInfo function after the component mounts
    fetchContestantInfo();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contestant Dashboard</h2>
      {contestantInfo ? (
        <div>
          <img
            src={contestantInfo.image}
            alt="Contestant Image"
            className="rounded-full w-24 h-24"
          />
          <p>Name: {contestantInfo.name}</p>
          <p>Age: {contestantInfo.age}</p>
          <p>Contest: {contestantInfo.contest}</p>
        </div>
      ) : (
        <p>Loading contestant information...</p>
      )}
    </div>
  );
}

export default ContestantDashboard;

