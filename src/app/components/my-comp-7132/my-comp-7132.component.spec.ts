import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7132Component } from './my-comp-7132.component';

describe('MyComp7132Component', () => {
  let component: MyComp7132Component;
  let fixture: ComponentFixture<MyComp7132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
