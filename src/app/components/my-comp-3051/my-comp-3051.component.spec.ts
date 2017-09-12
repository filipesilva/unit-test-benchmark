import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3051Component } from './my-comp-3051.component';

describe('MyComp3051Component', () => {
  let component: MyComp3051Component;
  let fixture: ComponentFixture<MyComp3051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
