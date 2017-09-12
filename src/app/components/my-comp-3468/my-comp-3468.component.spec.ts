import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3468Component } from './my-comp-3468.component';

describe('MyComp3468Component', () => {
  let component: MyComp3468Component;
  let fixture: ComponentFixture<MyComp3468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
