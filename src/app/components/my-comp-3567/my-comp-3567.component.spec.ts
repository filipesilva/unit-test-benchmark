import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3567Component } from './my-comp-3567.component';

describe('MyComp3567Component', () => {
  let component: MyComp3567Component;
  let fixture: ComponentFixture<MyComp3567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
