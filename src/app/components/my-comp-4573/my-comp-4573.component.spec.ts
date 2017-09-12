import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4573Component } from './my-comp-4573.component';

describe('MyComp4573Component', () => {
  let component: MyComp4573Component;
  let fixture: ComponentFixture<MyComp4573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
