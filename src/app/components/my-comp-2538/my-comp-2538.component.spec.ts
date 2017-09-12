import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2538Component } from './my-comp-2538.component';

describe('MyComp2538Component', () => {
  let component: MyComp2538Component;
  let fixture: ComponentFixture<MyComp2538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
