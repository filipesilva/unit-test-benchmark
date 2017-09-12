import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp475Component } from './my-comp-475.component';

describe('MyComp475Component', () => {
  let component: MyComp475Component;
  let fixture: ComponentFixture<MyComp475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
