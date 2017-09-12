import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3411Component } from './my-comp-3411.component';

describe('MyComp3411Component', () => {
  let component: MyComp3411Component;
  let fixture: ComponentFixture<MyComp3411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
