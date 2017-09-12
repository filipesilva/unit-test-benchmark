import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2545Component } from './my-comp-2545.component';

describe('MyComp2545Component', () => {
  let component: MyComp2545Component;
  let fixture: ComponentFixture<MyComp2545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
