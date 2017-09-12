import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1621Component } from './my-comp-1621.component';

describe('MyComp1621Component', () => {
  let component: MyComp1621Component;
  let fixture: ComponentFixture<MyComp1621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
