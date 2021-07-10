import React from 'react';

const Coding = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <div className="five wide column">
        <div className="title">CODING PROFILE</div>
        <div className="title emoji component-emoji title-emoji project-title">
          [+_+]
        </div>
      </div>
      <div className="ten wide column">
        <a target="_blank" href="https://leetcode.com/Ekant_29/">
          <button className="coding component-emoji project-title coding-link">
            LeetCode
          </button>
        </a>
        <a target="_blank" href="https://www.hackerrank.com/ekantchandrakar">
          <button className="coding component-emoji project-title coding-link">
            Hackerrank
          </button>
        </a>
        <a
          target="_blank"
          href="https://auth.geeksforgeeks.org/user/ekantchandrakar07/practice/"
        >
          <button className="coding component-emoji project-title coding-link">
            Geeksforgeeks
          </button>
        </a>
      </div>
    </div>
  );
};

export default Coding;