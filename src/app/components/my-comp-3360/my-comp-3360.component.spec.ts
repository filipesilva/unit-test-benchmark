import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3360Component } from './my-comp-3360.component';

describe('MyComp3360Component', () => {
  let component: MyComp3360Component;
  let fixture: ComponentFixture<MyComp3360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
