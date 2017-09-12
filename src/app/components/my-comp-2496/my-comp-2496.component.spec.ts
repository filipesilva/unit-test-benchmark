import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2496Component } from './my-comp-2496.component';

describe('MyComp2496Component', () => {
  let component: MyComp2496Component;
  let fixture: ComponentFixture<MyComp2496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
