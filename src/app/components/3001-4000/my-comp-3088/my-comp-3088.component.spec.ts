import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3088Component } from './my-comp-3088.component';

describe('MyComp3088Component', () => {
  let component: MyComp3088Component;
  let fixture: ComponentFixture<MyComp3088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
