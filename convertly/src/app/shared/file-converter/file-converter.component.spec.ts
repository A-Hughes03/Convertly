import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileConverterComponent } from './file-converter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FileConverterComponent', () => {
  let component: FileConverterComponent;
  let fixture: ComponentFixture<FileConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileConverterComponent],
      imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(FileConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});