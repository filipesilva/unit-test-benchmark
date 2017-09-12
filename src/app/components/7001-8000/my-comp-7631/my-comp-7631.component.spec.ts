import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7631Component } from './my-comp-7631.component';

describe('MyComp7631Component', () => {
  let component: MyComp7631Component;
  let fixture: ComponentFixture<MyComp7631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
