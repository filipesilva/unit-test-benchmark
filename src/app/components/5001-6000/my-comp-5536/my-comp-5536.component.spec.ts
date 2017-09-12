import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5536Component } from './my-comp-5536.component';

describe('MyComp5536Component', () => {
  let component: MyComp5536Component;
  let fixture: ComponentFixture<MyComp5536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
