import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3358Component } from './my-comp-3358.component';

describe('MyComp3358Component', () => {
  let component: MyComp3358Component;
  let fixture: ComponentFixture<MyComp3358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
