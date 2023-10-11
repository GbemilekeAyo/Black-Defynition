import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VoteContestant() {
  const [voterInfo, setVoterInfo] = useState({
    email: '',
    password: '',
  });

  const [contestants, setContestants] = useState([]);

   useEffect(() => {
    
    const fetchContestants = async () => {
      try {
        const response = await axios.get('https://zany-lime-panther-vest.cyclic.app/categories/{categoryId}/contestants');
        if (response.status === 200) {
          setContestants(response.data.contestants);
        }
      } catch (error) {
        console.error('Error fetching contestants: ', error);
      }
    };

    fetchContestants();
  }, []);

  const handleVote = async (contestantId) => {
    try {
      // Send a POST request to vote for a contestant
      await axios.post(`https://zany-lime-panther-vest.cyclic.app/categories/{categoryId}/vote`, {
        contestantId,
      });
      setContestants((prevContestants) =>
      prevContestants.filter((contestant) => contestant._id !== contestantId)
    );

    alert('Vote submitted successfully!');
  } catch (error) {
    console.error('Error submitting vote: ', error);
  }
};

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Voter Page</h2>
      <div className="mb-4">
        <h3>Login</h3>
        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Email"
            value={voterInfo.email}
            onChange={(e) =>
              setVoterInfo({ ...voterInfo, email: e.target.value })
            }
            className="w-full rounded-md border px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={voterInfo.password}
            onChange={(e) =>
              setVoterInfo({ ...voterInfo, password: e.target.value })
            }
            className="w-full rounded-md border px-3 py-2"
          />
          <button
            onClick={handleLogin}
            className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
          >
            Login
          </button>
        </div>
      </div>
      <div>
        <h3>Vote for Contestants</h3>
        <ul>
          {contestants.map((contestant) => (
            <li key={contestant._id}>
              <button
                onClick={() => handleVote(contestant._id)}
                className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
              >
                Vote for {contestant.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VoteContestant;

