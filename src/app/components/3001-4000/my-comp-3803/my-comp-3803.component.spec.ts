import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3803Component } from './my-comp-3803.component';

describe('MyComp3803Component', () => {
  let component: MyComp3803Component;
  let fixture: ComponentFixture<MyComp3803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
