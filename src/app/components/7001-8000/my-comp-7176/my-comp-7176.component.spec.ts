import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7176Component } from './my-comp-7176.component';

describe('MyComp7176Component', () => {
  let component: MyComp7176Component;
  let fixture: ComponentFixture<MyComp7176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
