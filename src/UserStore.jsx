import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

class UserStore {
    userInfo = {
        id: '113',
        name: 'Happy Learnings',
        subject: ['English', 'CS', 'Maths']     // SUBJECT ARRAY
    }

    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,
            addSubject: action        // REGISTER IN MOBX
        });
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }

    get totalSubject() {
        console.log(`getter`);
        return this.userInfo.subject.length;
    }

    logUserDetails = () => {
        console.log(`Subject length: ${this.totalSubject}`);
    }

    updateUser = (name) => {
        this.userInfo.name = name;
    }

    addSubject = (data) => {          // METHOD TO PUSH IN SUBJECT ARRAY
        this.userInfo.subject.push(data);
    }

    prefetchData = () => {
        console.log('run in action...');
    }
}
export default UserStore;