import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3369Component } from './my-comp-3369.component';

describe('MyComp3369Component', () => {
  let component: MyComp3369Component;
  let fixture: ComponentFixture<MyComp3369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
