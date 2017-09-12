import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6011Component } from './my-comp-6011.component';

describe('MyComp6011Component', () => {
  let component: MyComp6011Component;
  let fixture: ComponentFixture<MyComp6011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
