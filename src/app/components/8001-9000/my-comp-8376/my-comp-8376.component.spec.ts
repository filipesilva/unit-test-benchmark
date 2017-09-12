import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8376Component } from './my-comp-8376.component';

describe('MyComp8376Component', () => {
  let component: MyComp8376Component;
  let fixture: ComponentFixture<MyComp8376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
