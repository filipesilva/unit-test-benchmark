import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2429Component } from './my-comp-2429.component';

describe('MyComp2429Component', () => {
  let component: MyComp2429Component;
  let fixture: ComponentFixture<MyComp2429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
