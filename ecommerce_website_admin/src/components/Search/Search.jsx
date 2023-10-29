import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ProductItem from './ProductItem/ProductItem'

function Search() {

    const [searchParams] = useSearchParams()

    const key = searchParams.get('key')

    const [books, setBooks] = useState([])

    useEffect(() => {

    }, [key])

    return (
        <div className="main">
        </div>
    )
}

export default Search