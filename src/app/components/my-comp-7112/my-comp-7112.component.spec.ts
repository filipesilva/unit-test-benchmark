import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7112Component } from './my-comp-7112.component';

describe('MyComp7112Component', () => {
  let component: MyComp7112Component;
  let fixture: ComponentFixture<MyComp7112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
