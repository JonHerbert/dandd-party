import firebase from "../firebase";

const db = firebase.ref("/");

export default new class FirebaseService {
  getAll() {
    return db;
  }

  create(element) {
    return db.push(element);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}