import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8161Component } from './my-comp-8161.component';

describe('MyComp8161Component', () => {
  let component: MyComp8161Component;
  let fixture: ComponentFixture<MyComp8161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
