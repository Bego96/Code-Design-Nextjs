import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import Project from './project';

interface Project {
    id: string;
    projectName: string;
    projectLocation: string;
    projectDate: string;
    projectImages: ImageRef[];
    projectUploadDate: Date;
}

interface ImageRef {
    id: number;
    imageSource: string;
    imageFileRef: File;
    imageName: string;
}

type Props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const listCollection = collection(db, "projects");
  const querySnapshot = await getDocs(query(listCollection, orderBy("projectUploadDate", "desc")));

  const projectsList = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      projectName: data.projectName,
      projectLocation: data.projectLocation,
      projectDate: data.projectDate,
      projectImages: data.projectImages,
      projectUploadDate: data.projectUploadDate.toDate(), // Convert Firestore Timestamp to Date
    } as Project;
  });
   
    return projectsList.map((post: any) => ({
      id: post.id,
    }))
}

export default function Projects({ params: { id }}: Props) {
    return (
        <div className="pt-24 px-4 md:px-8 lg:px-16">
            <Project id={id}/>
        </div>
    )
}