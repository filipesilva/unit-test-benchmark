import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7348Component } from './my-comp-7348.component';

describe('MyComp7348Component', () => {
  let component: MyComp7348Component;
  let fixture: ComponentFixture<MyComp7348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
