import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7328Component } from './my-comp-7328.component';

describe('MyComp7328Component', () => {
  let component: MyComp7328Component;
  let fixture: ComponentFixture<MyComp7328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
