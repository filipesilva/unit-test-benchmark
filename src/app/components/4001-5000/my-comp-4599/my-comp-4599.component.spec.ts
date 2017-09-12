import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4599Component } from './my-comp-4599.component';

describe('MyComp4599Component', () => {
  let component: MyComp4599Component;
  let fixture: ComponentFixture<MyComp4599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
