import admin, { ServiceAccount } from 'firebase-admin'

const firebaseCredentialsBase64 = process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS;

if (!firebaseCredentialsBase64) {
  throw new Error('A variável de ambiente FIREBASE_CREDENTIALS_BASE64 não foi definida');
}

const serviceAccount = JSON.parse(Buffer.from(firebaseCredentialsBase64, 'base64').toString('utf-8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
  });
}

export const db = admin.firestore();