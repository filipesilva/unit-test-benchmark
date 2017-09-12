import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3368Component } from './my-comp-3368.component';

describe('MyComp3368Component', () => {
  let component: MyComp3368Component;
  let fixture: ComponentFixture<MyComp3368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
