import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UnitTestServiceService } from './unit-test-service.service';
import { UnitTestDireciveDirective } from './unit-test-direcive.directive';
import { UnitestPipePipe } from './unitest-pipe.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, UnitTestDireciveDirective , UnitestPipePipe
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Edu-Module7-App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Edu-Module7-App');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Edu-Module7-App!');
  });

  it(`should have one user`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.users.length).toEqual(1);
}));

it(`html should render one user`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
}));


it(`Text is changed by changeText Directive.`, async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector("span");
  expect(el.innerText).toContain('Directive Test.');
}));


});
