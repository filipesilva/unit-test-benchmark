import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2387Component } from './my-comp-2387.component';

describe('MyComp2387Component', () => {
  let component: MyComp2387Component;
  let fixture: ComponentFixture<MyComp2387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
