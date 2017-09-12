import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3984Component } from './my-comp-3984.component';

describe('MyComp3984Component', () => {
  let component: MyComp3984Component;
  let fixture: ComponentFixture<MyComp3984Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3984Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3984Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
