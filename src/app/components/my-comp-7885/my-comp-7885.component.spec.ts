import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7885Component } from './my-comp-7885.component';

describe('MyComp7885Component', () => {
  let component: MyComp7885Component;
  let fixture: ComponentFixture<MyComp7885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
