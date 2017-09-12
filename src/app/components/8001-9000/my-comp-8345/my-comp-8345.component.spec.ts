import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8345Component } from './my-comp-8345.component';

describe('MyComp8345Component', () => {
  let component: MyComp8345Component;
  let fixture: ComponentFixture<MyComp8345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
