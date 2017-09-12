import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3287Component } from './my-comp-3287.component';

describe('MyComp3287Component', () => {
  let component: MyComp3287Component;
  let fixture: ComponentFixture<MyComp3287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
