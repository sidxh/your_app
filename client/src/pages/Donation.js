import React, { useState } from 'react';

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '30px',
      backgroundColor: '#202340',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      width: '100%',
      maxWidth: '900px',
      margin: '10 auto',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',

    },
    section: {
      marginBottom: '24px',
    },
    title: {
      marginBottom: '12px',
      fontSize: '20px',
      color: '#FFFFFF',
      fontWeight: '600',
    },
    checkbox: {
      marginRight: '10px',
      cursor: 'pointer',
    },
    input: {
      padding: '12px',
      border: 'none',  // Remove border
      borderRadius: '3px',
      marginTop: '6px',
      fontSize: '14px',
      width: '90%',
      backgroundColor: '#2D2F55',
      color: '#FFFFFF',
      borderColor: '#2DEFE5',
      transition: 'border-color 0.3s ease',
    },
    inputAmount: {
      width: '20%',
      padding: '10px',
      border: 'none',  
      marginBottom: '1rem',
      borderRadius: '8px',
      marginTop: '6px',
      fontSize: '14px',
      backgroundColor: '#2D2F55',
      color: '#FFFFFF',
      transition: 'border-color 0.3s ease',
    },
    link: {
      color: '#6495ED',
      textDecoration: 'none',
      marginTop: '12px',
      display: 'block',
      fontSize: '14px',
    },
    button: {
      padding: '15px',
      backgroundColor: '#4169E1',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      width: '40%',
      fontWeight: '600',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginTop: '24px',
    },
    buttonHover: {
      backgroundColor: '#4169E1',
    },
    lbl: {
        marginRight: '1rem',
        alignItems: 'center',
    },
    tabs: {
      display: 'flex',
      marginBottom: '10px',
      cursor: 'pointer',
      backgroundColor: '#16192E',
      width: '45%',
      padding: '1%',
      borderRadius: '2rem',
    },
    tab: {
        padding: '5px',
        borderRadius: '30px',
        cursor: 'pointer',
        marginRight: '5px',
        width:'7rem',

    },
    activeTab: {
        backgroundColor: '#202340',
    },
    tabs1: {
      display: 'flex',
      cursor: 'pointer',
    },
    tab1: {
        padding: '5px',
        borderRadius: '20px',
        cursor: 'pointer',
        marginRight: '10px',
        border: '0.5px solid',
        borderColor: 'grey',
        width: '4rem',
    },
    activeValue: {
        backgroundColor: '#4169A1',
        borderColor: '#4169A1',
      },
  };
  
  
  const DonationForm = () => {
    const [activeTab, setActiveTab] = useState('Monthly');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [activeValue, setActiveValue] = useState('10');

    const handleActiveValue = (tab) => {
      setActiveValue(tab);
    };

    const [selectedTab, setSelectedTab] = useState('');
    const [donationAmount, setDonationAmount] = useState(''); // Initialize donation amount state

    // Function to handle the active tab change
    const handleTabChange = (tabName) => {
      setSelectedTab(tabName);
    };

    // Function to handle donation amount input change
    const handleDonationAmountChange = (newAmount) => {
      setDonationAmount(newAmount); // Update donation amount state
    };

    return (
      <table style={{marginLeft:'auto', marginRight:'auto',
        ...styles.form, padding: '3rem', marginTop:'4rem', boxShadow: '0px 0px 10px ',}}>
        <tr>
          <td style={{paddingTop:'10px', paddingBottom: '20px', paddingLeft:'30px', paddingRight:'40px', textAlign:'center'}}> 
<h1>
              Help us do more
            </h1>
            <p>
            Your contributions make a significant impact on our programs, facilities, and student support. If every alumni contributes $10 monthly, we can ensure continued excellence and growth. Your support is crucial for us to thrive and make a difference in the lives of our students.
            </p>
          </td>
          <td rowSpan={2} style={{marginRight:'auto',}}> 
          <form onSubmit={(e) => e.preventDefault()} action='https://buy.stripe.com/test_3cs01lguj9fO9I4cMM'>
            {/* Gift Frequency Section */}
              <header style={styles.title}>
              <h4 style={{marginBottom:'1rem',}}>Gift Frequency</h4>
              <div style={styles.tabs}>
                        <div
                            style={{ ...styles.tab, ...(activeTab === 'Monthly' ? styles.activeTab : {}) }}
                            onClick={() => handleTabClick('Monthly')}
                        >
                            <small style={{marginLeft:'15%'}}>Monthly</small>
                        </div>
                        <div
                            style={{ ...styles.tab, ...(activeTab === 'One-Time' ? styles.activeTab : {}) }}
                            onClick={() => handleTabClick('One-Time')}
                        >
                          <small style={{marginLeft:'6%',}}>One-Time</small>
                        </div>
                    </div>
              </header>
      
            {/* Select Amount Section */}
            <div style={styles.section}>
              <header style={styles.title}>
                <h4 style={{marginBottom:'1rem',}}>Select Amount (in US dollars)</h4>
                <div style={styles.tabs1}>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === '10' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('10')}
                        >
                            <small style={{marginLeft:'25%',}}>$10</small>
                        </div>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === '20' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('20')}
                        >
                          <small style={{marginLeft:'23%',}}>$20</small>
                        </div>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === '50' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('50')}
                        >
                          <small style={{marginLeft:'23%',}}>$50</small>
                        </div>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === '100' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('100')}
                        >
                          <small style={{marginLeft:'18%',}}>$100</small>
                        </div>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === '500' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('500')}
                        >
                          <small style={{marginLeft:'17%',}}>$500</small>
                        </div>
                        <div
                            style={{ ...styles.tab1, ...(activeValue === 'other' ? styles.activeValue : {}) }}
                            onClick={() => handleActiveValue('other')}
                        >
                              <small style={{marginLeft:'10%',}}>Other</small>
                        </div>
                        <br></br>
                        {selectedTab === 'other' && (
                        <div style={{ marginTop: '10px', marginLeft: '10%' }}>
                          <input
                            type="number"
                            placeholder="Enter amount"
                            value={donationAmount}
                            style={{ width: '80%', padding: '5px' }}
                            onChange={(e) => handleDonationAmountChange(e.target.value)} 
                          />
                        </div>
                        )}
                    </div>
              </header>
            </div>
            
            {/* Agreement Checkbox Section */}
              <label style={styles.lbl}>
              <input
                type="checkbox"
                id="agreement-checkbox"
                style={{marginRight:'10px',}}
              />
                Yes, I’ll generously add $0.75 each month to cover the transaction fees.
              </label>
              <br></br>
            {/* Name Input Section */}
              <input
                style={styles.input}
                type="text"
                id="name-input"
                placeholder="Enter your name (Optional)"
              />
              <a href="https://buy.stripe.com/test_3cs01lguj9fO9I4cMM" style={styles.link}>Click here to give in honor of another person</a>
      
            {/* Submit Button */}
            <br></br>
              <a href='https://buy.stripe.com/test_3cs01lguj9fO9I4cMM' 
              style={{
                padding:'2% 10%',
                backgroundColor: '#4169E1',
                borderRadius: '5px',
                }}>Donate now</a>
          </form>
          </td>
        </tr>
      </table>
    );
  };
  
  export default DonationForm;