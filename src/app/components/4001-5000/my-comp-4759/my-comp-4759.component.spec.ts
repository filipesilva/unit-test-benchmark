import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4759Component } from './my-comp-4759.component';

describe('MyComp4759Component', () => {
  let component: MyComp4759Component;
  let fixture: ComponentFixture<MyComp4759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
