import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7049Component } from './my-comp-7049.component';

describe('MyComp7049Component', () => {
  let component: MyComp7049Component;
  let fixture: ComponentFixture<MyComp7049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
