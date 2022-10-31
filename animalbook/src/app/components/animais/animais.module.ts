import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { CartaoModule } from '../cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
    declarations: [
        ListaAnimaisComponent,
        GradeFotosAnimaisComponent,
        AnimalComponent
    ],
    imports: [
        CommonModule,
        AnimaisRoutingModule,
        CartaoModule
    ]
})
export class AnimaisModule { }
