import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3290Component } from './my-comp-3290.component';

describe('MyComp3290Component', () => {
  let component: MyComp3290Component;
  let fixture: ComponentFixture<MyComp3290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
