import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp731Component } from './my-comp-731.component';

describe('MyComp731Component', () => {
  let component: MyComp731Component;
  let fixture: ComponentFixture<MyComp731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
