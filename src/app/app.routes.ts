import {Routes} from '@angular/router';
import {SignalsComponent} from './signals/signals.component';
import {StandaloneComponent} from './standalone/standalone.component';
import {ControlFlowComponent} from './control-flow/control-flow.component';
import {InputTransformComponent} from './input-transform/input-transform.component';
import {MyService} from './standalone/my.service';
import {RouteInputComponent} from './route-input/route-input.component';
import {FormDemoComponent} from './form-demo/form-demo.component';
import {AnimationsComponent} from './animations/animation.component';
import {ReactiveTemplateComponent} from './reactive-template/reactive-template.component';

export const routes: Routes = [
  {path: 'signals', component: SignalsComponent, providers: [
      MyService
    ]},
  {path: 'standalone', component: StandaloneComponent},
  {
    path: 'control-flow', component: ControlFlowComponent, providers: [
      MyService
    ]
  },
  {path: 'input-transform', component: InputTransformComponent},
  {path: 'route-input', redirectTo: 'route-input/path01'},
  {path: 'route-input/:pathParam', component: RouteInputComponent},
  {path: 'form', component: FormDemoComponent},
  {path: 'animations', component: AnimationsComponent},
  {path: 'reactive-template', component: ReactiveTemplateComponent},
];
