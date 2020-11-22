import {EventEmitter} from '@angular/core'

export class NotificationService { 
        notifier = new EventEmitter<string>()

        notify(message: string) {    
            this.notifier.emit(message)   
            
        }
}


      
        
/*       
class EventEmitter<T> extends Subject {
    constructor(isAsync?: boolean): EventEmitter<T>
    emit(value?: T): void
    subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription
  }
   */
      
      