import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp674Component } from './my-comp-674.component';

describe('MyComp674Component', () => {
  let component: MyComp674Component;
  let fixture: ComponentFixture<MyComp674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
