import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3513Component } from './my-comp-3513.component';

describe('MyComp3513Component', () => {
  let component: MyComp3513Component;
  let fixture: ComponentFixture<MyComp3513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
