import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7820Component } from './my-comp-7820.component';

describe('MyComp7820Component', () => {
  let component: MyComp7820Component;
  let fixture: ComponentFixture<MyComp7820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
