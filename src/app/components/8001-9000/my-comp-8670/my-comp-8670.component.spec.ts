import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8670Component } from './my-comp-8670.component';

describe('MyComp8670Component', () => {
  let component: MyComp8670Component;
  let fixture: ComponentFixture<MyComp8670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
