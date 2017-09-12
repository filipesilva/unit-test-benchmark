import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2210Component } from './my-comp-2210.component';

describe('MyComp2210Component', () => {
  let component: MyComp2210Component;
  let fixture: ComponentFixture<MyComp2210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
