import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1779Component } from './my-comp-1779.component';

describe('MyComp1779Component', () => {
  let component: MyComp1779Component;
  let fixture: ComponentFixture<MyComp1779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
