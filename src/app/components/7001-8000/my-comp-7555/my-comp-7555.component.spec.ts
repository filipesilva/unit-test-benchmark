import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7555Component } from './my-comp-7555.component';

describe('MyComp7555Component', () => {
  let component: MyComp7555Component;
  let fixture: ComponentFixture<MyComp7555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
