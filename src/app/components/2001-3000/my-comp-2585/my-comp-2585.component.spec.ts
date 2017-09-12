import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2585Component } from './my-comp-2585.component';

describe('MyComp2585Component', () => {
  let component: MyComp2585Component;
  let fixture: ComponentFixture<MyComp2585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
