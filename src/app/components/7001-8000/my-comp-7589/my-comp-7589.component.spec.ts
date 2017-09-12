import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7589Component } from './my-comp-7589.component';

describe('MyComp7589Component', () => {
  let component: MyComp7589Component;
  let fixture: ComponentFixture<MyComp7589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
