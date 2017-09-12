import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1970Component } from './my-comp-1970.component';

describe('MyComp1970Component', () => {
  let component: MyComp1970Component;
  let fixture: ComponentFixture<MyComp1970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
