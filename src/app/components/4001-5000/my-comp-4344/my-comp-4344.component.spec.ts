import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4344Component } from './my-comp-4344.component';

describe('MyComp4344Component', () => {
  let component: MyComp4344Component;
  let fixture: ComponentFixture<MyComp4344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
