import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2475Component } from './my-comp-2475.component';

describe('MyComp2475Component', () => {
  let component: MyComp2475Component;
  let fixture: ComponentFixture<MyComp2475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
