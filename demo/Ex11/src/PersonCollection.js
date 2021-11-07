import { makeObservable, observable, computed, action } from "mobx";

class PersonCollection {
  persons = [];

  constructor() {
    makeObservable(this, {
      persons: observable,
      addPerson: action,
      updatePerson: action,
      deletePerson: action,
      getAllUsers: computed,
      getAdults: computed,
    });
  }

  addPerson(person) {
    console.log(this.persons);
    this.persons.push(person);
  }

  updatePerson(person) {
    this.persons = this.persons.map((singlePerson) => {
      return singlePerson.id === person.id ? person : singlePerson;
    });
  }
  deletePerson(person) {
    this.persons = this.persons.filter((singlePerson) => {
      return singlePerson.id !== person.id;
    });
  }

  get getAllUsers() {
    console.log(this.persons);
    return this.persons;
  }
  get getAdults() {
    let adults = this.persons.filter((singlePerson) => {
      return singlePerson.age > 18;
    });
    return adults;
  }
}

export default PersonCollection;
