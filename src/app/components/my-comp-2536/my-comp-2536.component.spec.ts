import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2536Component } from './my-comp-2536.component';

describe('MyComp2536Component', () => {
  let component: MyComp2536Component;
  let fixture: ComponentFixture<MyComp2536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
