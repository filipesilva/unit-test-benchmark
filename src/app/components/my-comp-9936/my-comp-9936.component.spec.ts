import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9936Component } from './my-comp-9936.component';

describe('MyComp9936Component', () => {
  let component: MyComp9936Component;
  let fixture: ComponentFixture<MyComp9936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
