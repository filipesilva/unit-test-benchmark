import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3839Component } from './my-comp-3839.component';

describe('MyComp3839Component', () => {
  let component: MyComp3839Component;
  let fixture: ComponentFixture<MyComp3839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
