import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7573Component } from './my-comp-7573.component';

describe('MyComp7573Component', () => {
  let component: MyComp7573Component;
  let fixture: ComponentFixture<MyComp7573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
