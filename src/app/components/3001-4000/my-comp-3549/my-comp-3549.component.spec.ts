import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3549Component } from './my-comp-3549.component';

describe('MyComp3549Component', () => {
  let component: MyComp3549Component;
  let fixture: ComponentFixture<MyComp3549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
