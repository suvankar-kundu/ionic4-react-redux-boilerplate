import React, { Component } from 'react';
import { Link } from 'react-router-dom';



import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonModal
} from '@ionic/react';

class TestIonic extends Component {

  state = {
    showModal: false
  }

  handleClick = () => {
    this.setState({ showModal: true });
  }
  handleClose = () => {
     this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <IonApp>
          <IonContent>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
                <IonCardTitle>Running on React</IonCardTitle>
              </IonCardHeader>
            </IonCard>
            <IonButton onClick={this.handleClick} >Show Modal</IonButton>
            <Link to="/AboutPage">About</Link>
            <Link to="/Home">Home</Link>
          </IonContent>
        </IonApp>
        <IonModal
          isOpen={this.state.showModal}
          onDidDismiss={() => this.setState(() => ({ showModal: false }))}
        >
          Some content to display in the modal.
          <IonButton onClick={this.handleClose} >Close Modal</IonButton>
          </IonModal>
      </div>
    );
  }
}

export default TestIonic;