import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7711Component } from './my-comp-7711.component';

describe('MyComp7711Component', () => {
  let component: MyComp7711Component;
  let fixture: ComponentFixture<MyComp7711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
