import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3711Component } from './my-comp-3711.component';

describe('MyComp3711Component', () => {
  let component: MyComp3711Component;
  let fixture: ComponentFixture<MyComp3711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
