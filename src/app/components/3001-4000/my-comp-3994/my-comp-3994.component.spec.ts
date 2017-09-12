import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3994Component } from './my-comp-3994.component';

describe('MyComp3994Component', () => {
  let component: MyComp3994Component;
  let fixture: ComponentFixture<MyComp3994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
