import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2795Component } from './my-comp-2795.component';

describe('MyComp2795Component', () => {
  let component: MyComp2795Component;
  let fixture: ComponentFixture<MyComp2795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
