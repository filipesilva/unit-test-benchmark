import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7018Component } from './my-comp-7018.component';

describe('MyComp7018Component', () => {
  let component: MyComp7018Component;
  let fixture: ComponentFixture<MyComp7018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
