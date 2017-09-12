import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4091Component } from './my-comp-4091.component';

describe('MyComp4091Component', () => {
  let component: MyComp4091Component;
  let fixture: ComponentFixture<MyComp4091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
