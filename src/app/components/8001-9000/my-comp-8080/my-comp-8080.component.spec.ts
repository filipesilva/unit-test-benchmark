import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8080Component } from './my-comp-8080.component';

describe('MyComp8080Component', () => {
  let component: MyComp8080Component;
  let fixture: ComponentFixture<MyComp8080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
