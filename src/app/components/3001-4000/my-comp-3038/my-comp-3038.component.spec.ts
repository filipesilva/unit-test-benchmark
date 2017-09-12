import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3038Component } from './my-comp-3038.component';

describe('MyComp3038Component', () => {
  let component: MyComp3038Component;
  let fixture: ComponentFixture<MyComp3038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
