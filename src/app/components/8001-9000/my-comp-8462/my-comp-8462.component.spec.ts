import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8462Component } from './my-comp-8462.component';

describe('MyComp8462Component', () => {
  let component: MyComp8462Component;
  let fixture: ComponentFixture<MyComp8462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
