import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8486Component } from './my-comp-8486.component';

describe('MyComp8486Component', () => {
  let component: MyComp8486Component;
  let fixture: ComponentFixture<MyComp8486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
