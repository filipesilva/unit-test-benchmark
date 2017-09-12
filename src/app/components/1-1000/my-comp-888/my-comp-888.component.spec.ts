import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp888Component } from './my-comp-888.component';

describe('MyComp888Component', () => {
  let component: MyComp888Component;
  let fixture: ComponentFixture<MyComp888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
