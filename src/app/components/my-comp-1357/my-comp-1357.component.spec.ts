import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1357Component } from './my-comp-1357.component';

describe('MyComp1357Component', () => {
  let component: MyComp1357Component;
  let fixture: ComponentFixture<MyComp1357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
