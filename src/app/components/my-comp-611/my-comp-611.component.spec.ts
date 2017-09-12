import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp611Component } from './my-comp-611.component';

describe('MyComp611Component', () => {
  let component: MyComp611Component;
  let fixture: ComponentFixture<MyComp611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
