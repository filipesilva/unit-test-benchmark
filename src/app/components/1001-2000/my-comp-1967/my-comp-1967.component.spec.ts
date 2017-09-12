import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1967Component } from './my-comp-1967.component';

describe('MyComp1967Component', () => {
  let component: MyComp1967Component;
  let fixture: ComponentFixture<MyComp1967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
