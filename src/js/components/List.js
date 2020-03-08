import React from 'react'
import { connect } from 'react-redux'

// can also be called 'Select'
const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
