import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8683Component } from './my-comp-8683.component';

describe('MyComp8683Component', () => {
  let component: MyComp8683Component;
  let fixture: ComponentFixture<MyComp8683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
