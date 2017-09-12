import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4300Component } from './my-comp-4300.component';

describe('MyComp4300Component', () => {
  let component: MyComp4300Component;
  let fixture: ComponentFixture<MyComp4300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
