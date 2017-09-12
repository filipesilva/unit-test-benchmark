import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5163Component } from './my-comp-5163.component';

describe('MyComp5163Component', () => {
  let component: MyComp5163Component;
  let fixture: ComponentFixture<MyComp5163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
