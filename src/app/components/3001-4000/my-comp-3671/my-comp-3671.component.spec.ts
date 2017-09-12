import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3671Component } from './my-comp-3671.component';

describe('MyComp3671Component', () => {
  let component: MyComp3671Component;
  let fixture: ComponentFixture<MyComp3671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
