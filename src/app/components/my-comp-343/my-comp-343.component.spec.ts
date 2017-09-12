import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp343Component } from './my-comp-343.component';

describe('MyComp343Component', () => {
  let component: MyComp343Component;
  let fixture: ComponentFixture<MyComp343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
