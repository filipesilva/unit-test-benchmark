import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7340Component } from './my-comp-7340.component';

describe('MyComp7340Component', () => {
  let component: MyComp7340Component;
  let fixture: ComponentFixture<MyComp7340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
