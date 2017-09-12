import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9370Component } from './my-comp-9370.component';

describe('MyComp9370Component', () => {
  let component: MyComp9370Component;
  let fixture: ComponentFixture<MyComp9370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
