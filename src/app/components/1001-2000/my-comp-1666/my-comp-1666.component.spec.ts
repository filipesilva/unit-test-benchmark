import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1666Component } from './my-comp-1666.component';

describe('MyComp1666Component', () => {
  let component: MyComp1666Component;
  let fixture: ComponentFixture<MyComp1666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
