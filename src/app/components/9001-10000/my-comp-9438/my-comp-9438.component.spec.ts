import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9438Component } from './my-comp-9438.component';

describe('MyComp9438Component', () => {
  let component: MyComp9438Component;
  let fixture: ComponentFixture<MyComp9438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
