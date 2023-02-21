import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white h-full pb-40'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        
        <div className='text-xl mt-20 '>
          <span>1. Strong knowledge of C# and .NET/.NET Core, including familiarity with popular frameworks such as ASP.NET and Entity Framework.</span>
         <br/><span>2. Experience building APIs and working with popular API tools such as Swagger.</span>
         <br/><span>3. <a className='underline cursor-pointer font-semibold' href="https://www.credly.com/badges/7649a412-5732-4159-86f7-b9a1435fc8bb" target="_blank" rel="noreferrer">Microsoft certified Azure Soutions Architect </a>. Have earned certifications in <a className='underline cursor-pointer font-semibold' href="https://www.credly.com/badges/dabc34f8-71fa-43d3-a2df-00a669073903" target="_blank" rel="noreferrer"> AZ-104</a>  and  <a className='underline cursor-pointer font-semibold' href="https://www.credly.com/badges/b5dc6986-83a1-4f85-a298-790d43af1480" target="_blank" rel="noreferrer">AZ-305</a>.</span>
         <br/><span>4. Insights in Azure architecture design, including knowledge of cloud design patterns and practices.</span>
         <br/><span>5. Proficiency in HTML, CSS and JavaScript, as well as TypeScript for Angular and JSX for React.</span>
         <br/><span>6. Understanding of front-end design patterns and techniques, such as component-bsed architecture and state management.</span>
         <br/><span>7. Experience with version control systems like Git, and continuos integration and deployment (CI/CD) tools such as Azure DevOps.</span>
         <br/><span>8. Knowledge of databases such as SQL server, MySQL and experience working with database design and modelling tools.</span>
          

        </div>
       
      </div>
    </div>
  );
}

export default About;