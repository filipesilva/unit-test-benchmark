import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8627Component } from './my-comp-8627.component';

describe('MyComp8627Component', () => {
  let component: MyComp8627Component;
  let fixture: ComponentFixture<MyComp8627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
