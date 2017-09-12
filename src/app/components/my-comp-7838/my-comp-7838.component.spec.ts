import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7838Component } from './my-comp-7838.component';

describe('MyComp7838Component', () => {
  let component: MyComp7838Component;
  let fixture: ComponentFixture<MyComp7838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
