import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3309Component } from './my-comp-3309.component';

describe('MyComp3309Component', () => {
  let component: MyComp3309Component;
  let fixture: ComponentFixture<MyComp3309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
