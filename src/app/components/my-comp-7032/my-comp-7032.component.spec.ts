import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7032Component } from './my-comp-7032.component';

describe('MyComp7032Component', () => {
  let component: MyComp7032Component;
  let fixture: ComponentFixture<MyComp7032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
