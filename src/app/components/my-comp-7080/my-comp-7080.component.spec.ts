import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7080Component } from './my-comp-7080.component';

describe('MyComp7080Component', () => {
  let component: MyComp7080Component;
  let fixture: ComponentFixture<MyComp7080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
