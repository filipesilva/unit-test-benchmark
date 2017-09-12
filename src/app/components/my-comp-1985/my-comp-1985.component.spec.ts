import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1985Component } from './my-comp-1985.component';

describe('MyComp1985Component', () => {
  let component: MyComp1985Component;
  let fixture: ComponentFixture<MyComp1985Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1985Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
