import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1740Component } from './my-comp-1740.component';

describe('MyComp1740Component', () => {
  let component: MyComp1740Component;
  let fixture: ComponentFixture<MyComp1740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
