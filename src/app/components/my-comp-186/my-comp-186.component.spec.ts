import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp186Component } from './my-comp-186.component';

describe('MyComp186Component', () => {
  let component: MyComp186Component;
  let fixture: ComponentFixture<MyComp186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
