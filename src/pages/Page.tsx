import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { Favorites } from '../components/Favorites';
import { Inbox } from '../components/Inbox';
import { Outbox } from '../components/Outbox';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  function selectPage() {
    if(name === 'Inbox'){
      return <Inbox />
    }else if(name === 'Outbox'){
      return <Outbox />
    }else if (name === 'Favorites'){
      return <Favorites />
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
        {
          selectPage()
        }
      </IonContent>
    </IonPage>
  );
};

export default Page;
