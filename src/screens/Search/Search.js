import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'
import './Search.css'
import '../../utils/styles/styles.css'


export default class Search extends React.PureComponent{

    render(){
        return(
            <div className="safe_view">
                <SearchForm/>
            </div>
        )
    }

}