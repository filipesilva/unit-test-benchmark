import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp451Component } from './my-comp-451.component';

describe('MyComp451Component', () => {
  let component: MyComp451Component;
  let fixture: ComponentFixture<MyComp451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
