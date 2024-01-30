import { React } from "react";
import Footer from "../components/Footer.js";
import teamMembers from "../data/team.json";

const Team = () => {
  let teamArr = teamMembers.team;
  console.log(teamArr[2].pfp);

  return (
    <div className="w-screen max-h-screen">
      <section className="team-section flex flex-col justify-center items-center"> {/* mt-16 mb-16 */}
        <div className="team-title text-center relative text-4xl font-bold text-green-500 p-8">
          Our Team
        </div>

        <div className="team-cards flex flex-wrap xl:flex-row sm:flex-col gap-32 justify-center items-center w-[85%] mt-24">
          {teamArr.map((item) => (

            <div className="team-card flex flex-wrap justify-center items-center w-64 gap-8 p-5 shadow-lg rounded-md">

              <div className="">
                <img
                  className="team-image object-cover w-32 h-32 rounded-full border-solid border-2 border-green-500"
                  src={
                    item.pfp == null
                      ? process.env.PUBLIC_URL + "/Team_Pfp/default.jpg"
                      : process.env.PUBLIC_URL + item.pfp
                  }
                  alt="Person"
                />
              </div>

              <div className="team-detail text-center w-auto">
                <p className="text-2xl font-bold text-green-500">{item.name}</p>
                <p className="text-l text-gray-500">{item.position}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      {/* <div className="footer mb-0">
        <Footer/>
      </div> */}
    </div>
  );
};

export default Team;
