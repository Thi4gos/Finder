import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConectDBService {
  constructor(private angularFirestore: AngularFirestore) { }

  // MÉTODO GENÉRICO PARA OBTER UMA COLEÇÃO DO FIRESTORE
  getCollection(collectionName: string) {
    return this.angularFirestore.collection(collectionName).snapshotChanges();
  }

  // MÉTODO GENÉRICO PARA OBTER UM DOCUMENTO PELO ID
  getDocument(collectionName: string, documentId: string) {
    return this.angularFirestore.collection(collectionName).doc(documentId).get();
  }

  // MÉTODO GENÉRICO PARA ADICIONAR DOCUMENTOS
  addDocument(collectionName: string, data: any) {
    return this.angularFirestore.collection(collectionName).add(data);
  }

  // MÉTODO GENÉRICO PARA ATUALIZAR DOCUMENTOS
  updateDocument(collectionName: string, documentId: string, data: any) {
    return this.angularFirestore.collection(collectionName).doc(documentId).update(data);
  }

  // MÉTODO GENÉRICO PARA DELETAR DOCUMENTOS
  deleteDocument(collectionName: string, documentId: string) {
    return this.angularFirestore.collection(collectionName).doc(documentId).delete();
  }
}
