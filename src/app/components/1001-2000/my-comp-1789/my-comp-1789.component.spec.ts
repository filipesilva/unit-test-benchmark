import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1789Component } from './my-comp-1789.component';

describe('MyComp1789Component', () => {
  let component: MyComp1789Component;
  let fixture: ComponentFixture<MyComp1789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
