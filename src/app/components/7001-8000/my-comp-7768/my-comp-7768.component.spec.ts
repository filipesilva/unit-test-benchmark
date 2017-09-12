import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7768Component } from './my-comp-7768.component';

describe('MyComp7768Component', () => {
  let component: MyComp7768Component;
  let fixture: ComponentFixture<MyComp7768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
