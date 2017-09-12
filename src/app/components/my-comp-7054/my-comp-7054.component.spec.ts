import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7054Component } from './my-comp-7054.component';

describe('MyComp7054Component', () => {
  let component: MyComp7054Component;
  let fixture: ComponentFixture<MyComp7054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
