import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4930Component } from './my-comp-4930.component';

describe('MyComp4930Component', () => {
  let component: MyComp4930Component;
  let fixture: ComponentFixture<MyComp4930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
