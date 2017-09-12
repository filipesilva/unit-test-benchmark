import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3243Component } from './my-comp-3243.component';

describe('MyComp3243Component', () => {
  let component: MyComp3243Component;
  let fixture: ComponentFixture<MyComp3243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
