import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3455Component } from './my-comp-3455.component';

describe('MyComp3455Component', () => {
  let component: MyComp3455Component;
  let fixture: ComponentFixture<MyComp3455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
