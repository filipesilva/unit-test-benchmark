import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7300Component } from './my-comp-7300.component';

describe('MyComp7300Component', () => {
  let component: MyComp7300Component;
  let fixture: ComponentFixture<MyComp7300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
