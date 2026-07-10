import SimpleBarChart from "../../components/global/SimpleBarChar/SimpleBarChart";
import AreaChartExample from "../../components/global/PieChart/AreaChartExample";
import SimpleRadarChart from "../../components/global/RadarChart/SimpleRadarChart";

export default function Dashboard() {

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body m-0">
              <SimpleBarChart />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body m-0">
              <SimpleRadarChart />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body m-0">
              <SimpleBarChart />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card border-light mb-3">
            <div className="card-header">Header</div>
            <div className="card-body m-0">
              <AreaChartExample />
            </div>
          </div>
        </div>

      </div >
    </>
  )
}