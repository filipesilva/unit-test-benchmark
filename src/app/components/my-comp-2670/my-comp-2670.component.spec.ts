import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2670Component } from './my-comp-2670.component';

describe('MyComp2670Component', () => {
  let component: MyComp2670Component;
  let fixture: ComponentFixture<MyComp2670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
