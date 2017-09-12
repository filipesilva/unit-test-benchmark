import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7224Component } from './my-comp-7224.component';

describe('MyComp7224Component', () => {
  let component: MyComp7224Component;
  let fixture: ComponentFixture<MyComp7224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
