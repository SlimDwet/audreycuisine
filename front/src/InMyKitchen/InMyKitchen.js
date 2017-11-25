import React from 'react';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class InMyKitchen extends React.Component {

    constructor() {
        super();
        this.state = {
            inMyKitchen: null
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
            fetch(this.props.urlInMyKitchen)
            .then(response => {
                if(response.status === 200) {
                    response.json().then(data => {
                        this.setState({
                            inMyKitchen: data.data
                        });
                    })
                } else throw new Error("Une erreur s'est produite lors du chargement des sélections");
            });
        }
    }

    render() {
        return (
            <div>
                <SectionTitle title="Dans ma p'tite cuisine" />
            </div>
        );
    }

}

export default InMyKitchen;
