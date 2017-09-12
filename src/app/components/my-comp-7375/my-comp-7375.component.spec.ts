import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7375Component } from './my-comp-7375.component';

describe('MyComp7375Component', () => {
  let component: MyComp7375Component;
  let fixture: ComponentFixture<MyComp7375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
