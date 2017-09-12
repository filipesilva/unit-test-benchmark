import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3779Component } from './my-comp-3779.component';

describe('MyComp3779Component', () => {
  let component: MyComp3779Component;
  let fixture: ComponentFixture<MyComp3779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
