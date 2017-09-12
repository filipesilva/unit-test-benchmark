import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3497Component } from './my-comp-3497.component';

describe('MyComp3497Component', () => {
  let component: MyComp3497Component;
  let fixture: ComponentFixture<MyComp3497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
