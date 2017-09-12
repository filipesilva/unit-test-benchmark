import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp714Component } from './my-comp-714.component';

describe('MyComp714Component', () => {
  let component: MyComp714Component;
  let fixture: ComponentFixture<MyComp714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
