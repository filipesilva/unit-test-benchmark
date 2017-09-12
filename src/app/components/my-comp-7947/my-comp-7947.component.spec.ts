import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7947Component } from './my-comp-7947.component';

describe('MyComp7947Component', () => {
  let component: MyComp7947Component;
  let fixture: ComponentFixture<MyComp7947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
