import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7757Component } from './my-comp-7757.component';

describe('MyComp7757Component', () => {
  let component: MyComp7757Component;
  let fixture: ComponentFixture<MyComp7757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
