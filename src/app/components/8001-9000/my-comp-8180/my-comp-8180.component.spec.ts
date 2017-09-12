import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8180Component } from './my-comp-8180.component';

describe('MyComp8180Component', () => {
  let component: MyComp8180Component;
  let fixture: ComponentFixture<MyComp8180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
