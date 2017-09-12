import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3039Component } from './my-comp-3039.component';

describe('MyComp3039Component', () => {
  let component: MyComp3039Component;
  let fixture: ComponentFixture<MyComp3039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
