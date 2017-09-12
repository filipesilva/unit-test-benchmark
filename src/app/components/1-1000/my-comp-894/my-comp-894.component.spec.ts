import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp894Component } from './my-comp-894.component';

describe('MyComp894Component', () => {
  let component: MyComp894Component;
  let fixture: ComponentFixture<MyComp894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
