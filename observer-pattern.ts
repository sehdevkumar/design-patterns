interface Observer {
  update(observerMessage: any): void
}

interface Subject {
  registerAlter(observer: Observer): void
  removeAlert(observer: Observer): void
  notifyAlert(message): void
}

// Wrapper class for Subject
class SubjectClass implements Subject {
  registerAlters: Array<Observer> = []

  registerAlter(observer: Observer): void {
    this.registerAlters.push(observer)
  }
  removeAlert(observer: Observer): void {
    this.registerAlters.splice(this.registerAlters.indexOf(observer), 1)
  }
  notifyAlert(message: string) {
    this.registerAlters.forEach((obs) => obs.update(`${message}`))
  }
}

class FireAlert implements Observer {
  // impplement of update method
  update(observerMessage: any): void {
    console.log(`Fire Alter ${observerMessage}`)
  }
}

class EarthquakeAlter implements Observer {
  // impplement of update method
  update(observerMessage: any): void {
    console.log(`Earthquake Alert ${observerMessage}`)
  }
}

const subject = new SubjectClass()

const fire = new FireAlert()
const earthquake = new EarthquakeAlter()

subject.registerAlter(fire)
subject.registerAlter(earthquake)

subject.notifyAlert('Sehdev Run ')
subject.notifyAlert('Sehdev Run ')
subject.notifyAlert('Sehdev Run ')
