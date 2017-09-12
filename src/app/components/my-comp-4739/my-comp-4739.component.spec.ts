import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4739Component } from './my-comp-4739.component';

describe('MyComp4739Component', () => {
  let component: MyComp4739Component;
  let fixture: ComponentFixture<MyComp4739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
