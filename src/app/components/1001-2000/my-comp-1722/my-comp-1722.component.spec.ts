import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1722Component } from './my-comp-1722.component';

describe('MyComp1722Component', () => {
  let component: MyComp1722Component;
  let fixture: ComponentFixture<MyComp1722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
