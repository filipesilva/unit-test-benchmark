import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp859Component } from './my-comp-859.component';

describe('MyComp859Component', () => {
  let component: MyComp859Component;
  let fixture: ComponentFixture<MyComp859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
