import { NgModule } from '@angular/core';
import { CognitiveService } from './services/cognitive.service';
import { AzureHttpClient } from './services/azureHttpClient';
import { NgModel } from '@angular/forms/src/directives/ng_model';

@NgModule({
    providers: [AzureHttpClient, CognitiveService]
})
export class CommonModule{}