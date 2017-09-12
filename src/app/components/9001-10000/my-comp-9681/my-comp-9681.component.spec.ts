import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9681Component } from './my-comp-9681.component';

describe('MyComp9681Component', () => {
  let component: MyComp9681Component;
  let fixture: ComponentFixture<MyComp9681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
