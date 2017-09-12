import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3205Component } from './my-comp-3205.component';

describe('MyComp3205Component', () => {
  let component: MyComp3205Component;
  let fixture: ComponentFixture<MyComp3205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
