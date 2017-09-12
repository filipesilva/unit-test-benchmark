import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3362Component } from './my-comp-3362.component';

describe('MyComp3362Component', () => {
  let component: MyComp3362Component;
  let fixture: ComponentFixture<MyComp3362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
