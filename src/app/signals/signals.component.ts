import {Component, computed, effect, signal} from '@angular/core';
import {MyService} from '../standalone/my.service';
import {SignalsIOComponent} from './signals-io/signals-io.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [SignalsIOComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  material = signal({id: 5, name: 'some material'}, {equal: (a, b) => a.id === b.id});
  materialLabel = computed(() => `${this.material().id}:${this.material().name} (${new Date().getTime()})`);
  materialEffect = '';

  ioOld?: string;
  ioNew?: string;

  constructor(myService: MyService) {
    effect(() => {
      console.log('Value has been changed...');
      this.materialEffect = `${this.material().id}:${this.material().name} (${new Date().getTime()})`
    })
  }

  changeMaterial() {
    this.material.update(current => {
      const newMaterial = Object.assign({}, current);
      newMaterial.id++;
      return newMaterial;
    })

    //or
    // this.material.set({
    //   id: 200,
    //   name: 'some other'
    // });
  }
}
