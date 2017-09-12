import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1634Component } from './my-comp-1634.component';

describe('MyComp1634Component', () => {
  let component: MyComp1634Component;
  let fixture: ComponentFixture<MyComp1634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
