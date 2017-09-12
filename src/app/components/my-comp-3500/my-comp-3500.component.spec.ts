import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3500Component } from './my-comp-3500.component';

describe('MyComp3500Component', () => {
  let component: MyComp3500Component;
  let fixture: ComponentFixture<MyComp3500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
