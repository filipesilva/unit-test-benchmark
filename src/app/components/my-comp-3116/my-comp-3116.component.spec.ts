import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3116Component } from './my-comp-3116.component';

describe('MyComp3116Component', () => {
  let component: MyComp3116Component;
  let fixture: ComponentFixture<MyComp3116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
