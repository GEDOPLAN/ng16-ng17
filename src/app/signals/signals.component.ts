import {Component, computed, effect, signal} from '@angular/core';
import {MyService} from '../standalone/my.service';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  material = signal({id: 5, name: 'some material'}, {equal: (a, b) => a.id!==b.id});
  materialLabel = computed(() => `${this.material().id}:${this.material().name} (${new Date().getTime()})`);
  materialEffect = '';

  constructor(myService: MyService){
    effect(() => this.materialEffect = `${this.material().id}:${this.material().name} (${new Date().getTime()})`)
  }

  changeMaterial(){
    this.material.update( current => {
      current.id++;
      return current;
    })
  }

  setId(id: number){
    const m = this.material();
    m.id=id;
    this.material.set(m);
  }
}
