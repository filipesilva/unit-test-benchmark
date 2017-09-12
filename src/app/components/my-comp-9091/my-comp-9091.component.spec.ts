import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9091Component } from './my-comp-9091.component';

describe('MyComp9091Component', () => {
  let component: MyComp9091Component;
  let fixture: ComponentFixture<MyComp9091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
