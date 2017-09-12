import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3418Component } from './my-comp-3418.component';

describe('MyComp3418Component', () => {
  let component: MyComp3418Component;
  let fixture: ComponentFixture<MyComp3418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
