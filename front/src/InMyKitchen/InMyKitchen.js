import React from 'react';
import './InMyKitchen.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Loading from '../Components/Loading/Loading';
import TileContainer from './TileContainer';
import {getRandomKey} from '../utils/functions';
import { sendRequest, treatResponse } from '../utils/requests';

class InMyKitchen extends React.Component {

    constructor() {
        super();
        this.state = {
            inMyKitchen: null,
            loading: true
        };
    }

    componentDidMount() {
        if(this.props.urlInMyKitchen === undefined || this.props.urlInMyKitchen.length === 0) throw new Error("L'URL vers dans ma p'tite cuisine est manquante");
        this.getSelections();
    }

    /**
     * Lance une requête pour récupérer les sélections
     * @return void
     */
    getSelections = () => {
        // On récupère les sélections
        if(!this.state.inMyKitchen) {
            sendRequest('get', this.props.urlInMyKitchen).then(res => {
                const response = treatResponse(res);
                if(res.status === 200) {
                    this.setState({
                        inMyKitchen: response.data,
                        loading: false
                    });
                } else throw new Error("Une erreur s'est produite lors du chargement des sélections");
            });
        }
    }

    render() {
        let tileContainers = [];
        if(this.state.loading) {
            tileContainers.push(<Loading />);
        } else if(this.state.inMyKitchen) {
            this.state.inMyKitchen.map(selection => tileContainers.push(
                <TileContainer name={selection.name} posts={selection.posts} key={getRandomKey('tileContainer')} />
            ));
        }
        return (
            <div className="inMyKitchenContainer">
                <SectionTitle title="Dans ma p'tite cuisine" />
                <div className="content">
                    {tileContainers}
                </div>
            </div>
        );
    }

}

export default InMyKitchen;
