import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7583Component } from './my-comp-7583.component';

describe('MyComp7583Component', () => {
  let component: MyComp7583Component;
  let fixture: ComponentFixture<MyComp7583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
