import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3626Component } from './my-comp-3626.component';

describe('MyComp3626Component', () => {
  let component: MyComp3626Component;
  let fixture: ComponentFixture<MyComp3626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
