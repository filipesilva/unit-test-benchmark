import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3312Component } from './my-comp-3312.component';

describe('MyComp3312Component', () => {
  let component: MyComp3312Component;
  let fixture: ComponentFixture<MyComp3312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
