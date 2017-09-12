import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp283Component } from './my-comp-283.component';

describe('MyComp283Component', () => {
  let component: MyComp283Component;
  let fixture: ComponentFixture<MyComp283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
