import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3426Component } from './my-comp-3426.component';

describe('MyComp3426Component', () => {
  let component: MyComp3426Component;
  let fixture: ComponentFixture<MyComp3426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
