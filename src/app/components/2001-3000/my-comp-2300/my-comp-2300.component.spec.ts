import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2300Component } from './my-comp-2300.component';

describe('MyComp2300Component', () => {
  let component: MyComp2300Component;
  let fixture: ComponentFixture<MyComp2300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
