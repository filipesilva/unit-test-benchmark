import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp759Component } from './my-comp-759.component';

describe('MyComp759Component', () => {
  let component: MyComp759Component;
  let fixture: ComponentFixture<MyComp759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
