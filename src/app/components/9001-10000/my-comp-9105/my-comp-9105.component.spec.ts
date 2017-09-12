import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9105Component } from './my-comp-9105.component';

describe('MyComp9105Component', () => {
  let component: MyComp9105Component;
  let fixture: ComponentFixture<MyComp9105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
