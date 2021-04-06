import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('test_case1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('test_case2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeName({target : {value : 'Testing 1'}})
    expect(app.name).toBe("Testing 1");
  });

  it('test_case3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeName({target : {value : 'Testing 2'}})
    expect(app.name).toBe("Testing 2");
  });

  it('test_case4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeName({target : {value : 'Iamneo.ai'}})
    expect(app.name).toBe("Iamneo.ai");
  });

  it('test_case5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onChangeName({target : {value : 'Virtusa'}})
    expect(app.name).toBe("Virtusa");
  });

});
