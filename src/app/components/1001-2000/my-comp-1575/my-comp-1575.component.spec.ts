import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1575Component } from './my-comp-1575.component';

describe('MyComp1575Component', () => {
  let component: MyComp1575Component;
  let fixture: ComponentFixture<MyComp1575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
