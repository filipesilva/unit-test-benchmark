import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3467Component } from './my-comp-3467.component';

describe('MyComp3467Component', () => {
  let component: MyComp3467Component;
  let fixture: ComponentFixture<MyComp3467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
