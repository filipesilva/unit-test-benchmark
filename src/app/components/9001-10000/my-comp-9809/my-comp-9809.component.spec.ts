import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9809Component } from './my-comp-9809.component';

describe('MyComp9809Component', () => {
  let component: MyComp9809Component;
  let fixture: ComponentFixture<MyComp9809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
