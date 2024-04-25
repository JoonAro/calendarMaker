import  { useState } from 'react';
import cale from '../../assets/media/cale.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="relative flex flex-col p-8 md:p-14 items-center justify-start min-h-screen bg-mainBackground">
      <div className="row">
        <div className="col-6">
          <img
            src={cale} 
            alt="Calendar"
            className="ml-0 w-11/12 h-50"
          />
        </div>
        <div className="col-6">
          <h1 className="text-4xl font-bold text-whiteReplacement mt-0 mr-auto">About</h1>
          <p className="pt-16">
            This is a calendar maker app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem necessitatibus sint explicabo eius quaerat earum, autem sit temporibus. Ratione, quasi earum quis quas minus nostrum ipsa dolorum veritatis deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus in iure qui ab laboriosam enim repellendus voluptatem iusto consectetur earum aliquid, modi distinctio ipsam recusandae ea? Voluptates sed ea neque!l Lorem ipsum dolor sit amet consectetur.
          </p>
          {!showMore && (
            <button onClick={handleShowMore} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg mt-4">Show More</button>
          )}
          {showMore && (
            <p>
              Additional lorem text the thing is everuthing will be fine God is beside us will help as save us heasl us and protect through i walk the valley of the shadow of death i will fear no evil for you are with me your rod and your staff they comfort me you prepare a table before me in the presence of my enemies you anoint my head with oil my cup overlows surley goodness and mercy shall follow me all the days of my life and i will dwell in the house of the lord forever
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
