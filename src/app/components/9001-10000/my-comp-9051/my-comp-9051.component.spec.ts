import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9051Component } from './my-comp-9051.component';

describe('MyComp9051Component', () => {
  let component: MyComp9051Component;
  let fixture: ComponentFixture<MyComp9051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
