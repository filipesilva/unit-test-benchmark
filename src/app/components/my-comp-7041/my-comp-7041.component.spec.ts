import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7041Component } from './my-comp-7041.component';

describe('MyComp7041Component', () => {
  let component: MyComp7041Component;
  let fixture: ComponentFixture<MyComp7041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
