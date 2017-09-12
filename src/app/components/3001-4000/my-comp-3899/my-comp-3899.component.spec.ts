import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3899Component } from './my-comp-3899.component';

describe('MyComp3899Component', () => {
  let component: MyComp3899Component;
  let fixture: ComponentFixture<MyComp3899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
