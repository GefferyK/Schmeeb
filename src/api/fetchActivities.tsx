import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '../firebase_setup/firebase';

interface Activity {
  id: string;
  title: string;
  description?: string;
  members: string[];
}

export async function fetchActivities() {

  const activitiesSnapshot = await getDocs(collection(firestore, 'Activity'));
  console.log(activitiesSnapshot.docs[0].id);
  return activitiesSnapshot;
}
