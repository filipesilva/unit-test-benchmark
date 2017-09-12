import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7839Component } from './my-comp-7839.component';

describe('MyComp7839Component', () => {
  let component: MyComp7839Component;
  let fixture: ComponentFixture<MyComp7839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
