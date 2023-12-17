import React from 'react';

const AboutComponentMission = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex flex-col pt-[42px] pl-[30px]">
          <div className="flex flex-row font-milonga gap-2 text-[28px] lg:text-[64px] lg:ml-[80px]">
            <p>Our</p>
            <p className="text-primary">Mission</p>
          </div>
          <div className="bg-primary w-[272px] h-[5px] mt-[38px] lg:w-[887px] lg:ml-[80px] lg:mt-2"></div>
          <div className='flex flex-col gap-4 mt-4 lg:text-2xl lg:mt-[32px] lg:flex lg:flex-col lg:items-center'>
            <div className="font-urbanist lg:flex lg:gap-[56px]">
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">Interactive Cultural Education</p>
              <p className="mt-1 lg:w-[905px]">Presenting educational content with an interactive approach, providing young people with a deep understanding of cultural values, traditions and local wisdom.</p>
            </div>
            <div className="font-urbanist lg:flex lg:gap-[56px]">
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">Encouraging Creative Expression</p>
              <p className="mt-1 lg:w-[905px]">Inspire young people to express their cultural identity through creative forms of expression, such as art, music and writing, thereby helping to reinforce their ties to their cultural heritage. </p>
            </div>
            <div className="font-urbanist  lg:flex lg:gap-[56px]">
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">Innovation in Digital Experience</p>
              <p className="mt-1 lg:w-[905px]">
              Bringing culture to young people through digital innovations, such as virtual tours, interactive games, and engaging multimedia content to increase appeal.
              </p>
            </div>
            <div className="font-urbanist  lg:flex lg:gap-[56px]">
              <p className="text-base font-semibold lg:w-[320px] lg:text-2xl">Tradition Preservation</p>
              <p className="mt-1 lg:w-[905px]">Invite young people to be directly involved in tradition preservation activities, such as cultural festivals, traditional craft workshops, and other participatory programs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponentMission;