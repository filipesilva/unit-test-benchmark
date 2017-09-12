import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3282Component } from './my-comp-3282.component';

describe('MyComp3282Component', () => {
  let component: MyComp3282Component;
  let fixture: ComponentFixture<MyComp3282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
