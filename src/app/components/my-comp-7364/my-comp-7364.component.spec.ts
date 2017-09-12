import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7364Component } from './my-comp-7364.component';

describe('MyComp7364Component', () => {
  let component: MyComp7364Component;
  let fixture: ComponentFixture<MyComp7364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
