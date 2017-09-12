import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7946Component } from './my-comp-7946.component';

describe('MyComp7946Component', () => {
  let component: MyComp7946Component;
  let fixture: ComponentFixture<MyComp7946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
