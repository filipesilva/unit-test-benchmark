import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7520Component } from './my-comp-7520.component';

describe('MyComp7520Component', () => {
  let component: MyComp7520Component;
  let fixture: ComponentFixture<MyComp7520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
