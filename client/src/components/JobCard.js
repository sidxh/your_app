import React, { useState } from 'react';

const JobCard = (props) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="job-card">
      <h1>{props.jobTitle}</h1>
      <p>{props.company}</p>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => handleTabChange('description')}
        >
          Description
        </button>
        <button
          className={`tab ${activeTab === 'requirements' ? 'active' : ''}`}
          onClick={() => handleTabChange('requirements')}
        >
          Requirements
        </button>
        <button
          className={`tab ${activeTab === 'apply' ? 'active' : ''}`}
          onClick={() => handleTabChange('apply')}
        >
          Apply
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'description' && (
          <div>
            <p>{props.jobDescription}</p>
          </div>
        )}
        {activeTab === 'requirements' && (
          <div>
            <ul>
              {props.jobRequirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'apply' && (
          <div>
            <a href={props.applyLink} target='_blank' rel="noreferrer">Apply Now</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
