import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9508Component } from './my-comp-9508.component';

describe('MyComp9508Component', () => {
  let component: MyComp9508Component;
  let fixture: ComponentFixture<MyComp9508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
