import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3122Component } from './my-comp-3122.component';

describe('MyComp3122Component', () => {
  let component: MyComp3122Component;
  let fixture: ComponentFixture<MyComp3122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
