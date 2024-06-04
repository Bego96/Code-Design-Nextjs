/*import admin from "firebase-admin";

const serviceAccount = JSON.parse("firebase-adminsdk-3afju@code-design-36e78.iam.gserviceaccount.com");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();

export { adminDb, adminAuth };*/



/* ***************************************************************** */



/*import admin from "firebase-admin"


import { getAuth } from "firebase-admin/auth";


interface FirebaseAdminAppParams {
    projectId: string;
    clientEmail: string;
    storageBucket: string;
    privateKey: string;
}

function formatPrivateKey(key: string) {
    return key.replace(/\\n/g, "\n");
}

export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
    const privateKey = formatPrivateKey(params.privateKey);

    if (admin.apps.length > 0) {
        return admin.app;
    }

    const cert = admin.credential.cert({
        projectId: params.projectId,
        clientEmail: params.clientEmail,
        privateKey
    })

    return admin.initializeApp({
        credential: cert,
        projectId: params.projectId,
        storageBucket: params.storageBucket
    })
}

export async function initAdmin() {
    const params = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string || "code-design-36e78",
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string || "firebase-adminsdk-3afju@code-design-36e78.iam.gserviceaccount.com",
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string || "code-design-36e78.appspot.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY as string || "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPAcnAc7y7Ar76\nsRWN4bVFTDymBPASReZs3d3u9bStGypkcb2wrhkrgehVjWqUGwtzWTY5Xa/3F6sl\nUWftwATgsZDrJgFcHBAEaWrdNfIoVFI8PbbN3/Al1xQGNumedbTUnSRZmylSFy3X\nWeNqwRwz4jc8zXuzl4iqq9hu7txaB8nwNz+nk8QJqJY1SOxMpPapx+Drq+9/Ffxw\nn09KqrezyiP5nsT68E4jyQGuy5sN2ia66AY5K+/YlyzSd/BHAdHgQk/2si4Nfjcq\n5cLLiauFyrxm7kLq7gLm4NWzdk8ukwuwRJcI8bmZMrqojHq77DvA1/qscZVp7Hep\nx39gUhxLAgMBAAECggEASEDshbMgDfpgZKpIxrQgjGaWyK/yh75ENn2eiFjUzpMr\n0dFtj2zFNk1qpentaHKkJYffCFjuIYXuY+EtMGwUh8USuzERym+1G4UcGshIlNER\nvxsfYm6mqN6Qi7bBBmE5U/jhhjFFU/TpOECUw19SE74C38MtSTs8Ja5DpjzTRszN\n03RgYmvAZLJ2W0t5W+uBZRFqSv+w7bgu9eBOqc23Sehb/sh2nMEUbiFRHreLErrS\nIRgRshEaeuDBdScIxN8RBfsIG5YaekDO7rdfconMc2QdWjem8iD073g01Pxk/rCR\nefvOp17oK5MvHXjJ2zZy6Gwp0p4ZS0tclRBPnDTEyQKBgQD7xayP3jigw2sfjmIG\nx6DpWUMrXfrgBNNF/hzUbf9wWniqBKWTODl6/OgVRdIotIUIi2tIwYBicQxXpR/N\nRtKaXU+eQCKmODyJMdk+OnZtUIIomZ6dqxgpTgKgoqxPqFtmTtRlRupwDK35xv4e\nsf+JT/dA5pjGiv0+/Mf5EtCLnwKBgQDSe60URm2PiJg8M+cI5Af3JkBLAhHX3/RM\nk8z5XeEKXFrjqv57wTfNTsRfLQ9oAVNcylPIT225ygivk1X9Jyd8H+TClScDxa+y\n4UOZcHvE+3luGE29vP/ces6Dhnwm58bE5nRRGkbE7VdjNs/qC2u6Rrg16KFVgims\nuW7NjTxv1QKBgHYqjdYsPzm83j8+TWXPNgevXGYzQrb3rM1R+ef+BICQBcgOTEPv\nhJLjtm2dioiOSU38WYsZPo91bYyJNIbc8aV/nAmzIlAPXuIpYkPhnomp2p0BlL99\neOaR9Yu9LdBpPRSkdO1fvlJ+sPzlV4nCkyO4Q1zTneq5eyif7Z9KJFUTAoGBAIZR\ngkvz/aqhAnU4sfDMhADGGjVDpttaAW50y1M/A4M3GJE855VV4iRUZaBPAwvd/LK0\nMu8bMOxk71IL9c3NFLdzKuq5f+I6XzsJ4bejPnif+ge13rZ8S9MJU4w/YC77ra6t\nWgD/gbXdt+yKZ/f1PdPrmVZdk8cbfzjIRNtLjAvZAoGABfV39FIw00fDlvnLdlWb\nWJYmzE7GdVV7eJ+YU2qhZW78J3xxV0nr8kOnkaSRJ9cXV1eRch/vF8YDd3fTfRev\nqyyaSDgPA+0bgam2+nUDsamVAthO/B6mZ37gLR6VBLDTf9LLqdexwgBtN8nMvPwc\n+PbtCJ9iAVyPnJzEyJLDfTM=\n-----END PRIVATE KEY-----\n"
    }

    return createFirebaseAdminApp(params);
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();

export { adminDb, adminAuth };*/

