import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp35Component } from './my-comp-35.component';

describe('MyComp35Component', () => {
  let component: MyComp35Component;
  let fixture: ComponentFixture<MyComp35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
