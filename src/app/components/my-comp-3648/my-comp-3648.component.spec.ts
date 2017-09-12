import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3648Component } from './my-comp-3648.component';

describe('MyComp3648Component', () => {
  let component: MyComp3648Component;
  let fixture: ComponentFixture<MyComp3648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
