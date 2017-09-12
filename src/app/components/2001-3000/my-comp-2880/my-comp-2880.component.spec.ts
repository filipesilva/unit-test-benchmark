import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2880Component } from './my-comp-2880.component';

describe('MyComp2880Component', () => {
  let component: MyComp2880Component;
  let fixture: ComponentFixture<MyComp2880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
