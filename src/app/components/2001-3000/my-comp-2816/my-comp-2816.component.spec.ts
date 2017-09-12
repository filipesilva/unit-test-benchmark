import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2816Component } from './my-comp-2816.component';

describe('MyComp2816Component', () => {
  let component: MyComp2816Component;
  let fixture: ComponentFixture<MyComp2816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
