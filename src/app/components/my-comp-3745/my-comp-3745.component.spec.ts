import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3745Component } from './my-comp-3745.component';

describe('MyComp3745Component', () => {
  let component: MyComp3745Component;
  let fixture: ComponentFixture<MyComp3745Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3745Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
