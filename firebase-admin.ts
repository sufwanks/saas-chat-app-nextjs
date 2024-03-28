import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;
if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCusKFnvZ1K9iSe\nstiwjPlc5Mzi//aoDmLZOEX02p/5HYhJFYs1GfDKiFx2JqNVU6DhKZSyjzyVaEVi\nmej64wvc+cKsRtOzbvH8b+m377uHg/VnUMOEn65Anp6O2cz7v6LBY0eBKtbxL2d2\nS7mL7gQwpnxn+8ie9iWlA+gh6E9C7BdxwHTILkPUF+B78EBXN/Q0PLNXhrLx38tt\n4VXnmBu2miAvnb+8UbaRvZfo5JyCOMK8FkUrP7HeUKOl0XbSo4G7V9JPLD6iXbcu\nKTjEHfc7XVRl/wM9TM/cH2qu3diO9fd21zsrBZNm+OCrAJRksSEmGal+GUbEiVRA\nbtqWYjrhAgMBAAECggEAPjEcBXb4HMvs1aMOiixmSrAaUWaXRdV5U6Q5I6cB9QqS\njpJg8RK/KxvI7zdqRuJzEDZhfgCIrRhmO2hYDZnvi0hQCk1c6TDCbgDZ0GZE+UX9\nhD64nOrMeqz9/hWEaMwdAYR63H2H8G3UA8WJ1Utzqm5bNBnrnsw7MrhlWE0Aiu40\nBwWwUx8OoUtqtE17rtkjh1oZcmVEIUV+XyBTC93iv7Nl7yCb1iutswrZwqbvCuiv\na39S6DMJx5x53CE4Xgx6gdsvfDzbo7NzDC+aR0/WG/Bog4mnOdD5G7RWrTs/kiRv\n7paF/jXSct2IU16zGL8Y8x4iX873zc/N/ynCjd2s0QKBgQDTvDWtE3fpvqMmmLAu\n14YuRCi8J+oykY3/usGgs3N2qJkG9PRt65DgonJ5fc9Hz+ufohEBfuaZcou2nSCl\nz6xRe/pbr+/2h4d5YaeHsvjE1MEz5kNWMyyxSrNclvsqdEEJ4y4rL1sqpruVV9/W\nB+bJx5oPMsg/1D4phafkSHqzqwKBgQDTNc79VBPFTINigmMMJAv7NnTzJJDMq4av\nV1LyB9mF9uVBZy4Xw8SGEnxaQ+1q+LN1elM6MtgWENobl7uFDJFcl8gCXlIu6Cfu\nXXv1i2UJ5Pr25L1x7Y1TOfsawoBzDzU8BAf8fRgUIHyLyV+bvaCsOYK/DRy3ctJN\nBIMXk2B/owKBgDcP49mNjYqQ0/bOkEquK6vOd9Vuf94EsivF0mLLKAS8lYcUnpgT\nQYrZU/G6QPRI4tqRl+COssNG4YRs2jekiQhruFCtsTaoShfLyHhml4EAXvnzMKGz\nDzVP2tMCRHDm6J78oF4Eo620zGVrA7+yMFda+/pl12OZ+0xrAJ1CJ/6fAoGAFD7S\nKoJGquDcrzKkX+OMqnXb2/qjTpsae/A46S5LcYXrD8veJTUEv31CIjzkox5XxWkG\nVUvOXr8ayQ5QUT6VKHT8HQ4BfrGOMlEPsse71aj3TXc7mZIVu+aQ5U3DlkPc7HXO\nditfhX5fsd6JpZoVrqyMldeh6wu8kNlf34Cm/VUCgYAMCUuzySMVTrS7ftZGaLqg\n5io43HlKVoSDnvE9VFetggNirnEKgSzB+bcedItgDNqW+2yqrBRh9512pAxtnInW\nduFF8Ig0Pkdrks76iMocPHcwKI2Iy039hnQXZsXTBgH6G8CaMFm7B91Ht6TDs9hE\nLSfkBa+8wT6Jrnke70R/eg==\n-----END PRIVATE KEY-----",
    }),
  });
}

const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCusKFnvZ1K9iSe\nstiwjPlc5Mzi//aoDmLZOEX02p/5HYhJFYs1GfDKiFx2JqNVU6DhKZSyjzyVaEVi\nmej64wvc+cKsRtOzbvH8b+m377uHg/VnUMOEn65Anp6O2cz7v6LBY0eBKtbxL2d2\nS7mL7gQwpnxn+8ie9iWlA+gh6E9C7BdxwHTILkPUF+B78EBXN/Q0PLNXhrLx38tt\n4VXnmBu2miAvnb+8UbaRvZfo5JyCOMK8FkUrP7HeUKOl0XbSo4G7V9JPLD6iXbcu\nKTjEHfc7XVRl/wM9TM/cH2qu3diO9fd21zsrBZNm+OCrAJRksSEmGal+GUbEiVRA\nbtqWYjrhAgMBAAECggEAPjEcBXb4HMvs1aMOiixmSrAaUWaXRdV5U6Q5I6cB9QqS\njpJg8RK/KxvI7zdqRuJzEDZhfgCIrRhmO2hYDZnvi0hQCk1c6TDCbgDZ0GZE+UX9\nhD64nOrMeqz9/hWEaMwdAYR63H2H8G3UA8WJ1Utzqm5bNBnrnsw7MrhlWE0Aiu40\nBwWwUx8OoUtqtE17rtkjh1oZcmVEIUV+XyBTC93iv7Nl7yCb1iutswrZwqbvCuiv\na39S6DMJx5x53CE4Xgx6gdsvfDzbo7NzDC+aR0/WG/Bog4mnOdD5G7RWrTs/kiRv\n7paF/jXSct2IU16zGL8Y8x4iX873zc/N/ynCjd2s0QKBgQDTvDWtE3fpvqMmmLAu\n14YuRCi8J+oykY3/usGgs3N2qJkG9PRt65DgonJ5fc9Hz+ufohEBfuaZcou2nSCl\nz6xRe/pbr+/2h4d5YaeHsvjE1MEz5kNWMyyxSrNclvsqdEEJ4y4rL1sqpruVV9/W\nB+bJx5oPMsg/1D4phafkSHqzqwKBgQDTNc79VBPFTINigmMMJAv7NnTzJJDMq4av\nV1LyB9mF9uVBZy4Xw8SGEnxaQ+1q+LN1elM6MtgWENobl7uFDJFcl8gCXlIu6Cfu\nXXv1i2UJ5Pr25L1x7Y1TOfsawoBzDzU8BAf8fRgUIHyLyV+bvaCsOYK/DRy3ctJN\nBIMXk2B/owKBgDcP49mNjYqQ0/bOkEquK6vOd9Vuf94EsivF0mLLKAS8lYcUnpgT\nQYrZU/G6QPRI4tqRl+COssNG4YRs2jekiQhruFCtsTaoShfLyHhml4EAXvnzMKGz\nDzVP2tMCRHDm6J78oF4Eo620zGVrA7+yMFda+/pl12OZ+0xrAJ1CJ/6fAoGAFD7S\nKoJGquDcrzKkX+OMqnXb2/qjTpsae/A46S5LcYXrD8veJTUEv31CIjzkox5XxWkG\nVUvOXr8ayQ5QUT6VKHT8HQ4BfrGOMlEPsse71aj3TXc7mZIVu+aQ5U3DlkPc7HXO\nditfhX5fsd6JpZoVrqyMldeh6wu8kNlf34Cm/VUCgYAMCUuzySMVTrS7ftZGaLqg\n5io43HlKVoSDnvE9VFetggNirnEKgSzB+bcedItgDNqW+2yqrBRh9512pAxtnInW\nduFF8Ig0Pkdrks76iMocPHcwKI2Iy039hnQXZsXTBgH6G8CaMFm7B91Ht6TDs9hE\nLSfkBa+8wT6Jrnke70R/eg==\n-----END PRIVATE KEY-----",

    // privateKey: process.env.FIREBASE_PRIVATE_KEY
    //   ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY).toString()
    //   : undefined,
  }),
});

const adminAuth = admin.auth(app);
export { adminDb, adminAuth };
