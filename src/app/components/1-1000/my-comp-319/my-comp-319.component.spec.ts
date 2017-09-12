import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp319Component } from './my-comp-319.component';

describe('MyComp319Component', () => {
  let component: MyComp319Component;
  let fixture: ComponentFixture<MyComp319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
