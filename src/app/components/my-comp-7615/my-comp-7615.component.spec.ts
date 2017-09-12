import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7615Component } from './my-comp-7615.component';

describe('MyComp7615Component', () => {
  let component: MyComp7615Component;
  let fixture: ComponentFixture<MyComp7615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
