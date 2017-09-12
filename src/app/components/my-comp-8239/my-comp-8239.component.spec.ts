import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8239Component } from './my-comp-8239.component';

describe('MyComp8239Component', () => {
  let component: MyComp8239Component;
  let fixture: ComponentFixture<MyComp8239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
