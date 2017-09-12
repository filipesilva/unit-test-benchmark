import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3007Component } from './my-comp-3007.component';

describe('MyComp3007Component', () => {
  let component: MyComp3007Component;
  let fixture: ComponentFixture<MyComp3007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
