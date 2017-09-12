import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7821Component } from './my-comp-7821.component';

describe('MyComp7821Component', () => {
  let component: MyComp7821Component;
  let fixture: ComponentFixture<MyComp7821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
