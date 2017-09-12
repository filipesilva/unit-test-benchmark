import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3639Component } from './my-comp-3639.component';

describe('MyComp3639Component', () => {
  let component: MyComp3639Component;
  let fixture: ComponentFixture<MyComp3639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
