import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7490Component } from './my-comp-7490.component';

describe('MyComp7490Component', () => {
  let component: MyComp7490Component;
  let fixture: ComponentFixture<MyComp7490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
