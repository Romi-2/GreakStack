
import './Program.css';
import program1 from '../../assets/program1.png'; // Use the correct file extension
import programicon1 from '../../assets/programicon1.png';
import program2 from '../../assets/program2.png'; // Use the correct file extension
import programicon2 from '../../assets/programicon2.png';
import program3 from '../../assets/program3.png'; // Use the correct file extension
import programicon3 from '../../assets/programicon3.png';

function Program() {
  return (
    <div>
      <div className="programs">
        <div className="program">
          <img src={program1} alt="Program 1" />
          <div className="caption">
            <img src={programicon1} alt="Program Icon 1" />
            <p>Graduation Degree</p>
          </div>
        </div>

        <div className="program">
          <img src={program2} alt="Program 1" />
          <div className="caption">
            <img src={programicon2} alt="Program Icon 1" />
            <p>Masters Degree</p>
          </div>
        </div>

        <div className="program">
          <img src={program3} alt="Program 1" />
          <div className="caption">
            <img src={programicon3} alt="Program Icon 1" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
