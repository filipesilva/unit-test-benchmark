import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7485Component } from './my-comp-7485.component';

describe('MyComp7485Component', () => {
  let component: MyComp7485Component;
  let fixture: ComponentFixture<MyComp7485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
