import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1973Component } from './my-comp-1973.component';

describe('MyComp1973Component', () => {
  let component: MyComp1973Component;
  let fixture: ComponentFixture<MyComp1973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
