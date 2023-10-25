import Row from './Row/Row'
import { mockData } from '../../../../apis/mockdata'

function ListRow() {
  const categories = mockData?.categories
  return (
    <>
      {categories?.map((category, index) => <Row category={category} key={index} />)}
    </>
  )
}

export default ListRow