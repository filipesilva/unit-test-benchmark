import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp171Component } from './my-comp-171.component';

describe('MyComp171Component', () => {
  let component: MyComp171Component;
  let fixture: ComponentFixture<MyComp171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
