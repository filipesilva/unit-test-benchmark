import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3827Component } from './my-comp-3827.component';

describe('MyComp3827Component', () => {
  let component: MyComp3827Component;
  let fixture: ComponentFixture<MyComp3827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
