import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3619Component } from './my-comp-3619.component';

describe('MyComp3619Component', () => {
  let component: MyComp3619Component;
  let fixture: ComponentFixture<MyComp3619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
