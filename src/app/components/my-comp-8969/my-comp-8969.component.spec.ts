import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8969Component } from './my-comp-8969.component';

describe('MyComp8969Component', () => {
  let component: MyComp8969Component;
  let fixture: ComponentFixture<MyComp8969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
