import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp523Component } from './my-comp-523.component';

describe('MyComp523Component', () => {
  let component: MyComp523Component;
  let fixture: ComponentFixture<MyComp523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
