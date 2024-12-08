import Certificate from "../components/certificate/Certificate";
import img01 from "../img/certificates/img01.webp";
import img02 from "../img/certificates/img02.webp";

const Certificates = () => {
  let link01 =
    "https://www.freecodecamp.org/certification/hhormax/front-end-development-libraries";
  let link02 =
    "https://www.freecodecamp.org/certification/hhormax/javascript-algorithms-and-data-structures";
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Certificates</h2>
        <ul className="certificates">
          <Certificate img={img01} link={link01} />
          <Certificate img={img02} link={link02} />
        </ul>
      </div>
    </main>
  );
};

export default Certificates;
