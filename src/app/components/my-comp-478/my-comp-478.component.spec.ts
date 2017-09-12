import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp478Component } from './my-comp-478.component';

describe('MyComp478Component', () => {
  let component: MyComp478Component;
  let fixture: ComponentFixture<MyComp478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
