import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8500Component } from './my-comp-8500.component';

describe('MyComp8500Component', () => {
  let component: MyComp8500Component;
  let fixture: ComponentFixture<MyComp8500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
