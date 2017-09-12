import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7002Component } from './my-comp-7002.component';

describe('MyComp7002Component', () => {
  let component: MyComp7002Component;
  let fixture: ComponentFixture<MyComp7002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
