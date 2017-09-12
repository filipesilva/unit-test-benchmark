import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4299Component } from './my-comp-4299.component';

describe('MyComp4299Component', () => {
  let component: MyComp4299Component;
  let fixture: ComponentFixture<MyComp4299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
