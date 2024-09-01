import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    id: 1,
    header: 'What is AlumniUS?',
    text: 'AlumniUS is a platform designed to bridge the gap between current students and alumni of our university. It allows students to seek guidance and support from alumni who have expertise in various domains, helping them connect and learn from experienced professionals.',
  },
  {
    id: 2,
    header: 'How can AlumniUS benefit me?',
    text: 'AlumniUS provides you with a directory of alumni and seniors who have expertise in different domains such as technology, marketing, design, and more. You can reach out to them for guidance, mentorship, and assistance in your academic and professional journey.',
  },
  {
    id: 3,
    header: 'How do I search for mentors on AlumniUS?',
    text: (
      <span>
        You can easily search for mentors on AlumniUS by heading to the{' '}
        <Link to="/explore">Explore</Link> section and entering the specific skill or domain you need help with. We will provide you with a list of alumni and seniors who possess expertise in that particular area, along with their contact information for further communication.
      </span>
    ),
  },
  {
    id: 4,
    header: 'How do I contact a mentor on AlumniUS?',
    text: 'AlumniUS provides you with the contact information, such as Email Addresses and LinkedIn handles, of the mentors listed on the platform. You can use this information to reach out to them directly and initiate a conversation regarding your specific query or request for guidance.',
  },
  {
    id: 5,
    header: 'Is AlumniUS only for technical skills?',
    text: (
        <span>
          No, AlumniUS caters to a wide range of skills and domains. While it includes technical skills like programming, web development, and data science, it also encompasses non-technical skills such as marketing, design, content writing, and more. The platform aims to connect students with mentors across diverse fields. We are open to {' '}
          <Link to="/reach-out">suggestions</Link> for listing new domains as well.
        </span>
      ),
  },

  {
    id: 6,
    header: 'Why are some skills listed but do not have much data?',
    text: `We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains that we have to offer!`,
  },

  
  
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="rc-accordion-body-2">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const DetailSidebar = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="card">
              <div className="card-body">
                <h4 className="form-heading">Frequently Asked Questions [FAQs]</h4>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSidebar;
