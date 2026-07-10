import Dashboard from '../../components/admin/Dashboard'
import TableMovie from '../../components/admin/TableMovie'

export default function AdminHomePage() {

  return (
    <>
      <div className="container-flush">
        <Dashboard />
        <hr />
        <TableMovie />
      </div>
    </>
  )
}