import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6366Component } from './my-comp-6366.component';

describe('MyComp6366Component', () => {
  let component: MyComp6366Component;
  let fixture: ComponentFixture<MyComp6366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
