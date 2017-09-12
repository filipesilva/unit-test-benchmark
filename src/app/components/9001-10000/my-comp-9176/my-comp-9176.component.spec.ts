import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9176Component } from './my-comp-9176.component';

describe('MyComp9176Component', () => {
  let component: MyComp9176Component;
  let fixture: ComponentFixture<MyComp9176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
