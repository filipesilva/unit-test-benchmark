import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3955Component } from './my-comp-3955.component';

describe('MyComp3955Component', () => {
  let component: MyComp3955Component;
  let fixture: ComponentFixture<MyComp3955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
