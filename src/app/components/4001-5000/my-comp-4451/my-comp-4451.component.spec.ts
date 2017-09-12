import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4451Component } from './my-comp-4451.component';

describe('MyComp4451Component', () => {
  let component: MyComp4451Component;
  let fixture: ComponentFixture<MyComp4451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
