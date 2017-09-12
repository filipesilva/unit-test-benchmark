import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8396Component } from './my-comp-8396.component';

describe('MyComp8396Component', () => {
  let component: MyComp8396Component;
  let fixture: ComponentFixture<MyComp8396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
