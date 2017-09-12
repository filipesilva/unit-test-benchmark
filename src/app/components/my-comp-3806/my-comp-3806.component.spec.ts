import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3806Component } from './my-comp-3806.component';

describe('MyComp3806Component', () => {
  let component: MyComp3806Component;
  let fixture: ComponentFixture<MyComp3806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
