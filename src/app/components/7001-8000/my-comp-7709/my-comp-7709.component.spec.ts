import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7709Component } from './my-comp-7709.component';

describe('MyComp7709Component', () => {
  let component: MyComp7709Component;
  let fixture: ComponentFixture<MyComp7709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
