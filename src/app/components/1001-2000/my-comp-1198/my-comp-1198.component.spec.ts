import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1198Component } from './my-comp-1198.component';

describe('MyComp1198Component', () => {
  let component: MyComp1198Component;
  let fixture: ComponentFixture<MyComp1198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
