import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3343Component } from './my-comp-3343.component';

describe('MyComp3343Component', () => {
  let component: MyComp3343Component;
  let fixture: ComponentFixture<MyComp3343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
