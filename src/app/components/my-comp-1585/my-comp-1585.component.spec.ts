import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1585Component } from './my-comp-1585.component';

describe('MyComp1585Component', () => {
  let component: MyComp1585Component;
  let fixture: ComponentFixture<MyComp1585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
