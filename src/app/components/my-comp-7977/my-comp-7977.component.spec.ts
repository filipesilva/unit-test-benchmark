import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7977Component } from './my-comp-7977.component';

describe('MyComp7977Component', () => {
  let component: MyComp7977Component;
  let fixture: ComponentFixture<MyComp7977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
