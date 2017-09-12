import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3887Component } from './my-comp-3887.component';

describe('MyComp3887Component', () => {
  let component: MyComp3887Component;
  let fixture: ComponentFixture<MyComp3887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
