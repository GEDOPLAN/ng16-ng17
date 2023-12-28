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
  someId = signal(1);
  material = signal({id: 5, name: 'some material'}, {equal: (a, b) => a.id === b.id});
  materialLabel = computed(() => `${this.material().id}:${this.material().name} (${new Date().getTime()})`);
  materialEffect = '';

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
