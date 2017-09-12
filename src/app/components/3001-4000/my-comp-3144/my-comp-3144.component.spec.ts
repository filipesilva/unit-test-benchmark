import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3144Component } from './my-comp-3144.component';

describe('MyComp3144Component', () => {
  let component: MyComp3144Component;
  let fixture: ComponentFixture<MyComp3144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
