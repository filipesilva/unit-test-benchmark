import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7066Component } from './my-comp-7066.component';

describe('MyComp7066Component', () => {
  let component: MyComp7066Component;
  let fixture: ComponentFixture<MyComp7066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
