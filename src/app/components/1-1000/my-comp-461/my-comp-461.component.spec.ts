import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp461Component } from './my-comp-461.component';

describe('MyComp461Component', () => {
  let component: MyComp461Component;
  let fixture: ComponentFixture<MyComp461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
