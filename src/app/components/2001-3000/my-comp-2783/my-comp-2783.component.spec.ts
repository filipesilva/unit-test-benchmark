import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2783Component } from './my-comp-2783.component';

describe('MyComp2783Component', () => {
  let component: MyComp2783Component;
  let fixture: ComponentFixture<MyComp2783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
