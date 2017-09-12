import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3773Component } from './my-comp-3773.component';

describe('MyComp3773Component', () => {
  let component: MyComp3773Component;
  let fixture: ComponentFixture<MyComp3773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
