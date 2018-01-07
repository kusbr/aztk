import { NgModule } from '@angular/core';
import { CognitiveService } from './services/cognitive.service';
import { AzureHttpClient } from './services/azureHttpClient';
import { AzureToolkitService } from "./services/azuretoolkit.service";
import { NgModel } from '@angular/forms/src/directives/ng_model';

@NgModule({
    providers: [AzureHttpClient, CognitiveService, AzureToolkitService]
})

export class CommonModule{}