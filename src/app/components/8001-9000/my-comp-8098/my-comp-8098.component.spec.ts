import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8098Component } from './my-comp-8098.component';

describe('MyComp8098Component', () => {
  let component: MyComp8098Component;
  let fixture: ComponentFixture<MyComp8098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
