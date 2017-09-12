import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3253Component } from './my-comp-3253.component';

describe('MyComp3253Component', () => {
  let component: MyComp3253Component;
  let fixture: ComponentFixture<MyComp3253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
