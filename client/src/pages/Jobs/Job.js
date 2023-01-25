import './job.scss';

const Job = ({
  applyUrl,
  department,
  description,
  location,
  name,
  requirements,
  isOpen,
  onClickHeader = () => {},
}) => {
  return (
    <div className="job">
      <div className="job-header" onClick={onClickHeader}>
        <div>
          <h2 className="job-name">
            <span>{name}</span>
            <span>&#8964;</span>
          </h2>
          <div className="job-main-details">
            <h3>{location}</h3>
            <h3>{department}</h3>
          </div>
        </div>
        <a href={applyUrl} target="_blank" rel="noreferrer">
          Apply
        </a>
      </div>
      {isOpen && <div className="job-footer">{description}</div>}
    </div>
  );
};

export default Job;
