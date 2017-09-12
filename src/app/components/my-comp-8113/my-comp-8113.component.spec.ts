import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8113Component } from './my-comp-8113.component';

describe('MyComp8113Component', () => {
  let component: MyComp8113Component;
  let fixture: ComponentFixture<MyComp8113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
