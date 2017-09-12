import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8081Component } from './my-comp-8081.component';

describe('MyComp8081Component', () => {
  let component: MyComp8081Component;
  let fixture: ComponentFixture<MyComp8081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
