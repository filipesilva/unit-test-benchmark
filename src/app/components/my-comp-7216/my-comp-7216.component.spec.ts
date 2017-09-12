import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7216Component } from './my-comp-7216.component';

describe('MyComp7216Component', () => {
  let component: MyComp7216Component;
  let fixture: ComponentFixture<MyComp7216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
