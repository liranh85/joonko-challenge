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
        <h2 className="job-name">
          <span>{name}</span>
          <span>&#8964;</span>
        </h2>
        <a href={applyUrl} target="_blank" rel="noreferrer">
          Apply
        </a>
      </div>
      {isOpen && <div className="job-footer">{description}</div>}
    </div>
  );
};

export default Job;
