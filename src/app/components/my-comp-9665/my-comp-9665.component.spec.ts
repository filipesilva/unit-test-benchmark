import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9665Component } from './my-comp-9665.component';

describe('MyComp9665Component', () => {
  let component: MyComp9665Component;
  let fixture: ComponentFixture<MyComp9665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
