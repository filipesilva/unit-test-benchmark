import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9551Component } from './my-comp-9551.component';

describe('MyComp9551Component', () => {
  let component: MyComp9551Component;
  let fixture: ComponentFixture<MyComp9551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
