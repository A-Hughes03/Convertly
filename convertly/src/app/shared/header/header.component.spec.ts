import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render header text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header').textContent).toContain('File Conversion Made Simple - Convertly');
  });

  it('should render subheader text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.subheader').textContent).toContain('Seamlessly transform your files into the formates you need. No hassle, no limits.');
  });
});
