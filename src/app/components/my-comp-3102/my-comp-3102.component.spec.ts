import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3102Component } from './my-comp-3102.component';

describe('MyComp3102Component', () => {
  let component: MyComp3102Component;
  let fixture: ComponentFixture<MyComp3102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
