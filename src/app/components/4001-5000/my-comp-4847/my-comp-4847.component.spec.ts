import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4847Component } from './my-comp-4847.component';

describe('MyComp4847Component', () => {
  let component: MyComp4847Component;
  let fixture: ComponentFixture<MyComp4847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
