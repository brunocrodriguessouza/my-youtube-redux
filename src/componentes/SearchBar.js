import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Segment, Input } from 'semantic-ui-react'

import { buscaVideo } from './../store/actions/busca-video'

const SearchBar = props => {

    useEffect(() => {
        props.buscaVideo('Xumes Udemy')
    })

    const pesquisaTermo = (e) => {
        if (e.keyCode === 13) {
            const termo = e.target.value;
            console.log(termo)
            props.buscaVideo(termo)
        }
    }

    return (
        <div className='search-bar'>
            <Segment stacked>
                <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => pesquisaTermo(e)} />
            </Segment>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carregando: state.busca.carregando,
        erro: state.busca.erro,
        videos: state.busca.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)