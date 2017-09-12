import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6170Component } from './my-comp-6170.component';

describe('MyComp6170Component', () => {
  let component: MyComp6170Component;
  let fixture: ComponentFixture<MyComp6170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
