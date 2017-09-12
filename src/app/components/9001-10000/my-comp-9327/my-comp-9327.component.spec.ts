import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9327Component } from './my-comp-9327.component';

describe('MyComp9327Component', () => {
  let component: MyComp9327Component;
  let fixture: ComponentFixture<MyComp9327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
