import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7638Component } from './my-comp-7638.component';

describe('MyComp7638Component', () => {
  let component: MyComp7638Component;
  let fixture: ComponentFixture<MyComp7638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
