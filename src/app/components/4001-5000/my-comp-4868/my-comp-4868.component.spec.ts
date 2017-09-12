import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4868Component } from './my-comp-4868.component';

describe('MyComp4868Component', () => {
  let component: MyComp4868Component;
  let fixture: ComponentFixture<MyComp4868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
