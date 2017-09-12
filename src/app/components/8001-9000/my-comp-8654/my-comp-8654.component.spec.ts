import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8654Component } from './my-comp-8654.component';

describe('MyComp8654Component', () => {
  let component: MyComp8654Component;
  let fixture: ComponentFixture<MyComp8654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
