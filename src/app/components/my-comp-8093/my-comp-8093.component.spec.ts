import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8093Component } from './my-comp-8093.component';

describe('MyComp8093Component', () => {
  let component: MyComp8093Component;
  let fixture: ComponentFixture<MyComp8093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
