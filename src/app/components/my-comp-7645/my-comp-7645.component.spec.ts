import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7645Component } from './my-comp-7645.component';

describe('MyComp7645Component', () => {
  let component: MyComp7645Component;
  let fixture: ComponentFixture<MyComp7645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
