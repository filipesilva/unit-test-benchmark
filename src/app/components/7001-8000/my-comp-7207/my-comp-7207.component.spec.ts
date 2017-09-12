import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7207Component } from './my-comp-7207.component';

describe('MyComp7207Component', () => {
  let component: MyComp7207Component;
  let fixture: ComponentFixture<MyComp7207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
