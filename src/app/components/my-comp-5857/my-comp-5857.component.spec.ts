import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5857Component } from './my-comp-5857.component';

describe('MyComp5857Component', () => {
  let component: MyComp5857Component;
  let fixture: ComponentFixture<MyComp5857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
