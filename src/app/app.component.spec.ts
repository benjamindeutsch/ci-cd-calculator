import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should calculate', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calculate(2,2,'+')).toEqual(4);
    expect(app.calculate(2,2,'-')).toEqual(0);
    expect(app.calculate(2,2,'*')).toEqual(4);
    expect(app.calculate(2,2,'/')).toEqual(1);
  });

  it('should throw an error if operator does not exist', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(function(){app.calculate(2,2,'^')}).toThrow(new Error("Operator not defined"));
  });

  it('should calculate with operands and operator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.operand1 = 4;
    app.operand2 = 2;
    app.operator = '/';
    app.onButtonClick();
    expect(app.result).toEqual(2);
  });
});
