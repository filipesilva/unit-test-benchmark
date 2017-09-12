import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9169Component } from './my-comp-9169.component';

describe('MyComp9169Component', () => {
  let component: MyComp9169Component;
  let fixture: ComponentFixture<MyComp9169Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
