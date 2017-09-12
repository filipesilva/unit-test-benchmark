import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp931Component } from './my-comp-931.component';

describe('MyComp931Component', () => {
  let component: MyComp931Component;
  let fixture: ComponentFixture<MyComp931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
