import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp947Component } from './my-comp-947.component';

describe('MyComp947Component', () => {
  let component: MyComp947Component;
  let fixture: ComponentFixture<MyComp947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
