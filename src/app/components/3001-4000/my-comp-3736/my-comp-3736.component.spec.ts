import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3736Component } from './my-comp-3736.component';

describe('MyComp3736Component', () => {
  let component: MyComp3736Component;
  let fixture: ComponentFixture<MyComp3736Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3736Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
