import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9077Component } from './my-comp-9077.component';

describe('MyComp9077Component', () => {
  let component: MyComp9077Component;
  let fixture: ComponentFixture<MyComp9077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
