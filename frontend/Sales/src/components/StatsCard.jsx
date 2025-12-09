const StatsCard = ({ label, value }) => (
  <div className="stat-card">
    <p>{label}</p>
    <h3>{value}</h3>
  </div>
);

export default StatsCard;
