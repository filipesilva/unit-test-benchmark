import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3832Component } from './my-comp-3832.component';

describe('MyComp3832Component', () => {
  let component: MyComp3832Component;
  let fixture: ComponentFixture<MyComp3832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
