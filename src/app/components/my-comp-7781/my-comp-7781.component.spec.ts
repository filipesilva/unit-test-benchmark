import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7781Component } from './my-comp-7781.component';

describe('MyComp7781Component', () => {
  let component: MyComp7781Component;
  let fixture: ComponentFixture<MyComp7781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
