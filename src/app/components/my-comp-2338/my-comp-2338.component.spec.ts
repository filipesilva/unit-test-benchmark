import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2338Component } from './my-comp-2338.component';

describe('MyComp2338Component', () => {
  let component: MyComp2338Component;
  let fixture: ComponentFixture<MyComp2338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
